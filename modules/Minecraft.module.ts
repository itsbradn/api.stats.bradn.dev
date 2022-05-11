import axios from 'axios';
import { Document, HydratedDocument } from 'mongoose';
import server from '../app';
import capeModel from '../models/cape.model';
import ErrorResponse from '../models/errorResponse.model';
import mojangModel, { IMojang, IMojangCapeHistory, IMojangSkinHistory, IMojangUsernameHistory } from '../models/mojang.model';
import skinModel from '../models/skin.model';
import { GetHypixelModelByUUID } from './Hypixel.module';
import { handleGetRequest } from './Request.module';

interface MinecraftResponse {
    username: string,
    uuid: string,
    usernameHistory: Array<IMojangUsernameHistory>,
    skinHistory: Array<IMojangSkinHistory>,
    capeHistory: Array<IMojangCapeHistory>
}

interface MojangProfile {
    name: string,
    id: string
}
interface NameHistoryValue {
    name: string,
    changedToAt?: number
}

interface SessionResponse {
    id: string,
    name: string,
    properties: Array<SessionBase64>
}

interface SessionBase64 {
    name: string,
    value: string,
}

interface SessionBuffer {
    timestamp: number,
    profileId: string,
    profileName: string,
    signatureRequired: boolean,
    textures: {
        SKIN: {
            url: string,
        },
        CAPE: {
            url: string,
        }
    }
}

const routes = {
    profile: `https://api.mojang.com/users/profiles/minecraft/`,
    nameHistory: `https://api.mojang.com/user/profiles/%uuid%/names`,
    sessionRequest: `https://sessionserver.mojang.com/session/minecraft/profile/`,
    texture: `https://textures.minecraft.net/texture/`
}

/**
 * Get a users mojang details such as uuid, skins, capes, and past names.
 * 
 * @param username Minecraft username
 */
async function GetUserByUsername(username:string): Promise<MinecraftResponse | ErrorResponse> {
    let uuid = await ConvertUsernameToUUID(username)
    if ((uuid as ErrorResponse).message) return uuid as ErrorResponse;
    return GetUserByUUID(uuid as string);
}

/**
 * Get a user model from the database including all mojang details we cache.
 * 
 * @param uuid Minecraft UUID without dashes
 */
async function GetUserModelByUUID(uuid: string): Promise<HydratedDocument<any> | ErrorResponse> {
    console.log(await GetHypixelModelByUUID(uuid));
    let model: IMojang | null = await mojangModel.findOne({ uuid });
    if (!model) {
        let username = await ConvertUUIDToUsername(uuid)
        if ((username as ErrorResponse).message) return username as ErrorResponse;
        model = await mojangModel.create({ 
            uuid, 
            username,
            cacheData: {
                playerDataRefreshAt: new Date(),
                textureRefreshAt: new Date()
            }
        });
    }
    if (model.cacheData.playerDataRefreshAt < new Date()) {
        let refreshPlayerData = await RefreshPlayerData(model.username);
        if ((refreshPlayerData as ErrorResponse).message) return refreshPlayerData as ErrorResponse;
        model = refreshPlayerData as IMojang;
    };

    if (model.cacheData.textureRefreshAt < new Date()) {
        let refreshTextureData = await RefreshTextures(model.uuid);
        if ((refreshTextureData as ErrorResponse).message) return refreshTextureData as ErrorResponse;
        model = refreshTextureData as IMojang;
    };

    return model;
}

/**
 * Get a users mojang details such as uuid, skins, capes, and past names.
 * 
 * @param uuid Minecraft UUID without dashes
 */
async function GetUserByUUID(uuid:string): Promise<MinecraftResponse | ErrorResponse> {
    let model = await GetUserModelByUUID(uuid)
    if ((model as ErrorResponse).message) return model as ErrorResponse;
    model = model as HydratedDocument<IMojang>;
    let response: MinecraftResponse = {
        username: model.username,
        uuid: model.uuid,
        usernameHistory: model.usernameHistory,
        skinHistory: model.skinHistory,
        capeHistory: model.capeHistory,
    }

    return response;
}

/**
 * Get a users UUID without dashes.
 * 
 * @param username Minecraft username
 */
async function ConvertUsernameToUUID(username: string): Promise<string | ErrorResponse> {
    let model = await mojangModel.findOne({ username }) as IMojang;
    if (!model) {
        let refreshPlayerData = await RefreshPlayerData(username);
        if ((refreshPlayerData as ErrorResponse).message) return refreshPlayerData as ErrorResponse;
        model = refreshPlayerData as IMojang;
    }
    if (model.cacheData.playerDataRefreshAt < new Date()) model = await RefreshPlayerData(username) as IMojang;

    return model.uuid;
}

/**
 * Get a users username.
 * 
 * @param uuid Minecraft UUID without dashes
 */
async function ConvertUUIDToUsername(uuid: string): Promise<String | ErrorResponse> {
    let nameHistory: Array<NameHistoryValue> = (await handleGetRequest(routes.nameHistory.replace("%uuid%", uuid))).data.reverse();
    if (!nameHistory) {
        server.terminal.error(`Couldn't fetch name history at route ${routes.nameHistory.replace("%uuid%", uuid)} for uuid ${uuid}`);
        return new ErrorResponse(`Couldn't fetch name history from mojang.`, 500);
    }
    return nameHistory[0].name;
}

/**
 * Update cached textures in the database such as skins and capes.
 * 
 * @param uuid Minecraft UUID without dashes
 */
async function RefreshTextures(uuid: string): Promise<IMojang | ErrorResponse> {
    let session: SessionResponse = (await handleGetRequest(`${routes.sessionRequest}${uuid}`)).data;
    let buffer: SessionBuffer = JSON.parse(Buffer.from(session.properties[0].value, 'base64').toString());

    let model = await mojangModel.findOne({ uuid });
    if (!model) {
        model = await mojangModel.create({ 
            uuid: session.id, 
            username: session.name,
            cacheData: {
                playerDataRefreshAt: new Date(),
                textureRefreshAt: new Date(Date.now() + (parseInt(process.env.MC_TEXTURE_REFRESH_AFTER_MINUTES || "5") * 60 * 1000))
            }
        });
    }

    if (model.username !== session.name) model.username = session.name;
    let skinId = ConvertTextureURLToId(buffer.textures.SKIN.url);
    if (skinId) {
        let skin = await skinModel.findOne({ textureId: skinId });
        if (!skin) {
            skin = await skinModel.create({
                textureId: skinId,
            });
        }

        if (!model.skinHistory.some(e => e.textureId === skin?.id)) {
            let skinVal: IMojangSkinHistory = {
                textureId: skin.id,
                textureApplicationDate: new Date(),
            }

            model.skinHistory.push(skinVal);
        }
    }

    let capeId = ConvertTextureURLToId(buffer.textures.CAPE.url);
    if (capeId) {
        let cape = await capeModel.findOne({ textureId: capeId });
        if (!cape) {
            cape = await capeModel.create({
                textureId: capeId
            });
        }

        if (!model.capeHistory.some(e => e.textureId === cape?.id)) {
            let capeVal: IMojangCapeHistory = {
                textureId: cape.id,
                textureApplicationDate: new Date()
            }

            model.capeHistory.push(capeVal);
        }
    }

    model.cacheData.textureRefreshAt = new Date(Date.now() + (parseInt(process.env.MC_TEXTURE_REFRESH_AFTER_MINUTES || "5") * 60 * 1000));
    await model.save()

    return model
}

/**
 * Update cached mojang details including uuid, name history, and username.
 * 
 * @param username Minecraft Username
 */
async function RefreshPlayerData(username:string): Promise<IMojang | ErrorResponse> {
    if (!username || username === "") return new ErrorResponse(`No username provided`, 500);
    let profile: MojangProfile = (await handleGetRequest(`${routes.profile}${username}`)).data;
    if (!profile) {
        server.terminal.error(`Couldn't fetch profile at route ${routes.profile} for username ${username}`);
        return new ErrorResponse(`Couldn't fetch user data from mojang.`, 500);
    }

    let nameHistory: Array<NameHistoryValue> = (await handleGetRequest(routes.nameHistory.replace("%uuid%", profile.id))).data.reverse();
    if (!nameHistory) {
        server.terminal.error(`Couldn't fetch name history at route ${routes.nameHistory.replace("%uuid%", profile.id)} for uuid ${profile.id} (${username})`);
        return new ErrorResponse(`Couldn't fetch name history from mojang.`, 500);
    }

    let model = await mojangModel.findOne({ uuid: profile.id });
    if (!model) {
        model = await mojangModel.create({ 
            uuid: profile.id, 
            username: profile.name,
            cacheData: {
                playerDataRefreshAt: new Date(Date.now() + (parseInt(process.env.MC_PLAYER_REFRESH_AFTER_MINUTES || "2880") * 60 * 1000)),
                textureRefreshAt: new Date()
            }
        });
    }

    model.username = profile.name;
    for (let username of nameHistory) {
        let val: IMojangUsernameHistory = {
            username: username.name,
            usernameApplicationDate: new Date(username.changedToAt || 0),
        }
        if (model.usernameHistory.includes(val)) continue;
        model.usernameHistory.push(val)
    }

    model.cacheData.playerDataRefreshAt = new Date(Date.now() + (parseInt(process.env.MC_PLAYER_REFRESH_AFTER_MINUTES || "2880") * 60 * 1000));
    await model.save();
    return model;
}

/**
 * Converts a mojang texture url to an id.
 * 
 * @param url Mojang texture URL
 */
function ConvertTextureURLToId(url: string): string | undefined {
    return url.split('/').pop();
}

/**
 * Converts database texture ID to an Array Buffer of the skin
 * 
 * @param id Database texture ID
 */
async function getTextureFromId(id: string): Promise<ErrorResponse | ArrayBuffer> {
    if (!id) return new ErrorResponse(`No Id given`, 400);
    let skin = await skinModel.findOne({ id });
    if (!skin) return new ErrorResponse(`No texture found`, 404);
    if (skin?.id !== id) return new ErrorResponse(`No texture found`, 404);
    try {
        return (await axios.get(`${routes.texture}${skin.textureId}`, { responseType: 'arraybuffer' })).data;
    } catch (e) {
        return new ErrorResponse(`No texture found`, 404);
    }
}

export {
    GetUserByUUID,
    GetUserByUsername,
    GetUserModelByUUID,
    getTextureFromId,
    ConvertUsernameToUUID
}