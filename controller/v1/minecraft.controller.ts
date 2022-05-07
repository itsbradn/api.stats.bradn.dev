import { NextFunction, Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import rateLimitMiddleware from "../../middleware/rateLimit.middleware";
import ErrorResponse from "../../models/errorResponse.model";
import { IMojang } from "../../models/mojang.model";
import { GetUserByUsername } from "../../modules/Minecraft.module";
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
        })
    }
}