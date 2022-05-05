import { Request, Response } from "express";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import { AbstractController } from "../abstract.controller";

@Controller('/account', 1)
export class AccountController extends AbstractController {
    @Route()
    GetDetails(req: Request, res: Response): void {
        res.send('haha');
    }
}