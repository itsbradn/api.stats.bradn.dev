import { Response, Request, NextFunction } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import adminprotectedMiddleware from "../../middleware/adminprotected.middleware";
import emojiModel from "../../models/emoji.model";
import ErrorResponse from "../../models/errorResponse.model";
import { AbstractController } from "./admin.abstract";

@Controller('/admin', 1)
export class AccountController extends AbstractController {
    @Route(RequestType.POST, '/emoji/add', adminprotectedMiddleware)
    AddEmoji(req: Request, res: Response, next: NextFunction): void {
        const { id, name } = req.params;
        if (!id || !name) return next(new ErrorResponse(`Please fill all fields.`, 401));

        try {
            emojiModel.create({ 
                emojiId: id,
                emojiName: name,
                createdAt: Date.now(),
                createdBy: req.user.id,
             });

             res.status(200).json({
                 success: true,
             });

             return;
        } catch (e) {
            return next(e);
        }
    }
}