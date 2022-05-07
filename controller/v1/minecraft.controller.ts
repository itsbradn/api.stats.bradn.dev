import { NextFunction, Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import rateLimitMiddleware from "../../middleware/rateLimit.middleware";
import { AbstractController } from "./minecraft.abstract";

@Controller('/auth', 1)
export class MinecraftController extends AbstractController {
    @Route(RequestType.POST, '/login', rateLimitMiddleware)
    async GetPlayer(req: Request, res: Response, next: NextFunction): Promise<void> {

    }
}