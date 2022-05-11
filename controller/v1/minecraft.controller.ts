import { text } from "body-parser";
import { NextFunction, Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import protectedMiddleware from "../../middleware/protected.middleware";
import rateLimitMiddleware from "../../middleware/rateLimit.middleware";
import ErrorResponse from "../../models/errorResponse.model";
import mojangModel, { IMojang } from "../../models/mojang.model";
import { GetHypixelUserByUUID, HypixelResponse } from "../../modules/Hypixel.module";
import { GetUserByUsername, getTextureFromId, MinecraftResponse } from "../../modules/Minecraft.module";
import { AbstractController } from "./minecraft.abstract";

@Controller('/mc', 1)
export class MinecraftController extends AbstractController {
    @Route(RequestType.GET, '/player/:player', rateLimitMiddleware)
    async GetPlayer(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { player } = req.params;

        let data = await GetUserByUsername(player);
        if ((data as ErrorResponse).message) return next(data as ErrorResponse);
        data = data as MinecraftResponse;

        let hypixelSuccess = true;
        let hypixel = await GetHypixelUserByUUID(data.uuid);
        if ((hypixel as ErrorResponse).message) hypixelSuccess = false;
        hypixel = hypixel as HypixelResponse;
        
        res.send({
            success: true,
            data: {
                ...data,
                hypixel: (hypixelSuccess ? {...hypixel} : undefined)
            }
        });
    }

    @Route(RequestType.GET, '/texture/:id', rateLimitMiddleware)
    async GetTexture(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        
        let texture = await getTextureFromId(id);
        if ((texture as ErrorResponse).message) return next(texture as ErrorResponse);
        res.contentType('image/png');
        res.send(texture);
    }

    @Route(RequestType.POST, '/link', [rateLimitMiddleware, protectedMiddleware])
    async ApplyLinkCode(req: Request, res: Response, next: NextFunction): Promise<void> {
        let { code } = req.body;
        if (!code) return next(new ErrorResponse(`No code supplied`, 400));
        code = parseInt(code);
        
        let mcModel = await mojangModel.findOne({ connectionAuthCode: code });
        if (!mcModel) return next(new ErrorResponse(`This code doesn't exist.`, 404));
        if (code !== mcModel.connectionAuthCode) return next(new ErrorResponse(`This code doesn't exist.`, 404));
        if (mcModel?.connectionAuthCodeRefreshAt < new Date()) {
            return next(new ErrorResponse(`This code has expired, please rejoin the server to refresh it.`, 410));
        }

        mcModel.ownerId = req.user.id;
        await mcModel.save();
        res.status(200).json({
            success: true
        })
    }
}