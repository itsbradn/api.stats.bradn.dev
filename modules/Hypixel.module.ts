import axios from 'axios';
import { HydratedDocument, Model } from 'mongoose';
import { HypixelData, HYPIXEL_PLUS_COLOR, HYPIXEL_RANK_COLOR, HYPIXEL_RANK } from '../constant/hypixel.constant';
import ErrorResponse from '../models/errorResponse.model';
import hypixelModel, { IHypixel } from '../models/hypixel.model';
import { handleGetRequest } from './Request.module';
import { ConvertUsernameToUUID } from './Minecraft.module';
import TNTGamesGame from './stats/games/TNTGames.game';

const routes = {
    player: `https://api.hypixel.net/player`
}

export interface HypixelResponse {
    uuid: string,
    connections: {
        firstLogin: Date,
        lastLogin: Date,
        lastLogout: Date,
    },
    karma: number,
    rank: {
        current: HYPIXEL_RANK | string,
        rankColor: HYPIXEL_RANK_COLOR | string,
        plusColor: HYPIXEL_PLUS_COLOR | string,
        history: Array<{type: HYPIXEL_RANK, timePurchased: Date}>
    },
    stats: {
        TNTGames: IHypixel["stats"]["TNTGames"],
    },
    gifted: {
        ranks: number,
    },
}

async function GetHypixelUserByUsername(username: string): Promise<HypixelResponse | ErrorResponse> {
    let uuid = await ConvertUsernameToUUID(username);
    if ((uuid as ErrorResponse).message) return uuid as ErrorResponse;
    uuid = uuid as string;
    return await GetHypixelUserByUUID(uuid);
}

async function GetHypixelUserByUUID(uuid: string): Promise<HypixelResponse | ErrorResponse> {
    let model = await GetHypixelModelByUUID(uuid);
    if ((model as ErrorResponse).message) return model as ErrorResponse;
    model = model as HydratedDocument<IHypixel>;

    let response: HypixelResponse = {
        uuid: model.uuid,
        connections: {
            firstLogin: model.connections.firstLogin,
            lastLogin: model.connections.lastLogin,
            lastLogout: model.connections.lastLogout
        },
        karma: model.karma,
        rank: {
            current: model.rank.current,
            rankColor: model.rank.rankColor,
            plusColor: model.rank.plusColor,
            history: model.rank.history,
        },
        stats: {
            TNTGames: model.stats.TNTGames
        },
        gifted: {
            ranks: model.gifted.ranks,
        }
    }

    return response;
}

async function GetHypixelModelByUUID(uuid: string): Promise<HydratedDocument<IHypixel> | ErrorResponse> {
    let model: HydratedDocument<IHypixel> | null = await hypixelModel.findOne({ uuid });
    if (!model) {
        model = await hypixelModel.create({
            uuid,
            refreshAt: new Date(Date.now() - 60000)
        });
    }

    if (model.refreshAt < new Date()) {
        let req = (await handleGetRequest(routes.player, {
            params: {
                uuid,
                key: process.env.HYPIXEL_API_KEY || ""
            }
        }));
        if (req.status === 403) return new ErrorResponse(`Hypixel rejected the request`, 403);
        if (req.status === 429) return new ErrorResponse(`Hypixel is ratelimiting requests from us. Please contact support`, 403);
        if (req.status >= 500) return new ErrorResponse(`Hypixel is currently down`, 403);
        if (!req || req.data.success == false || !req.data.player) return new ErrorResponse(`No hypixel data for this user.`, 400);
        let player = req.data as HypixelData;

        model.connections.firstLogin = new Date(player.player.firstLogin);
        model.connections.lastLogin = new Date(player.player.lastLogin);
        model.connections.lastLogout = new Date(player.player.lastLogout);
        model.karma = player.player.karma;
        model.achievements.points = player.player.achievementPoints;
        model.rank.current = player.player.newPackageRank;
        model.rank.plusColor = player.player.rankPlusColor;
        model.refreshAt = new Date(Date.now() + (parseInt(process.env.HYPIXEL_REFRESH_MINUTES || "5") * 60 * 1000));
        model = TNTGamesGame(model, player.player.stats.TNTGames);

        await model.save();
    }

    return model;
}

export {
    GetHypixelModelByUUID,
    GetHypixelUserByUsername,
    GetHypixelUserByUUID,
}