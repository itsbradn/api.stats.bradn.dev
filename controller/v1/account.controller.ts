import { Response, Request, NextFunction } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import protectedMiddleware from "../../middleware/protected.middleware";
import ErrorResponse from "../../models/errorResponse.model";
import { sendCodeTemplate } from "../../modules/Email.module";
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

    @Route(RequestType.POST, '/email/verify', protectedMiddleware)
    async VerifyEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { code } = req.body;
        
        if (req.user.activationAuthCodeRefreshAt < new Date()) return next(new ErrorResponse(`This code has expired`, 401));
        if (code !== req.user.activationAuthCode) return next(new ErrorResponse(`This code is incorrect`, 401));

        req.user.verified = true;
        req.user.activationAuthCode = "000000";
        await req.user.save();

        res.status(200).json({ success: true });
    }

    @Route(RequestType.POST, '/email/resend', protectedMiddleware)
    async RefreshEmailCode(req: Request, res: Response, next: NextFunction): Promise<void> {
        
        let code = Math.floor(100000 + Math.random() * 900000);
        req.user.activationAuthCode = code;
        req.user.activationAuthCodeRefreshAt = new Date(Date.now() + (parseInt(process.env.EMAIL_CODE_REFRESH_MINUTES || "5") * 60 * 1000));
        await req.user.save();

        await sendCodeTemplate(req.user.username, req.user.email, code.toString());

        res.status(200).json({ success: true });
    }
}