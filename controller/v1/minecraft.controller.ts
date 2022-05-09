import { text } from "body-parser";
import { NextFunction, Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import rateLimitMiddleware from "../../middleware/rateLimit.middleware";
import ErrorResponse from "../../models/errorResponse.model";
import { IMojang } from "../../models/mojang.model";
import { GetUserByUsername, getTextureFromId } from "../../modules/Minecraft.module";
import { AbstractController } from "./minecraft.abstract";

@Controller('/mc', 1)
export class MinecraftController extends AbstractController {
    @Route(RequestType.GET, '/player/:player', rateLimitMiddleware)
    async GetPlayer(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { player } = req.params;

        let data = await GetUserByUsername(player);
        if ((data as ErrorResponse).message) return next(data as ErrorResponse);
        data = data as IMojang;
        
        res.send({
            success: true,
            data: {
                ...data,
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
}