import { Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import rateLimitMiddleware from "../../middleware/rateLimit.middleware";
import { AbstractController } from "./account.abstract";

@Controller('/account', 1)
export class AccountController extends AbstractController {
    @Route(RequestType.GET, '/', rateLimitMiddleware)
    GetDetails(req: Request, res: Response): void {
        res.send('haha');
    }
}