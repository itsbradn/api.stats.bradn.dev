import { Response, Request, NextFunction } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import protectedMiddleware from "../../middleware/protected.middleware";
import ErrorResponse from "../../models/errorResponse.model";
import { AbstractController } from "./account.abstract";

@Controller('/account', 1)
export class AccountController extends AbstractController {
    @Route(RequestType.GET, '/', protectedMiddleware)
    GetDetails(req: Request, res: Response, next: NextFunction): void {
        if (!req.user.verified) {
            res.status(403).json({
                success: false,
                data: {
                    id: req.user.id,
                    username: req.user.username,
                    email: req.user.email,
                    verified: false,
                }
            })
        }

        res.status(200).json({
            success: true,
            data: {
                id: req.user.id,
                username: req.user.username,
                email: req.user.email,
            }
        })
    }
}