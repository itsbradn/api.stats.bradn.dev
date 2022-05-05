import { Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import rateLimit from "../../middleware/rateLimit";
import { AbstractController } from "../abstract.controller";

@Controller('/account', 1)
export class AccountController extends AbstractController {
    @Route(RequestType.GET, '/')
    GetDetails(req: Request, res: Response): void {
        res.send('haha');
    }
}