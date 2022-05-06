import { NextFunction, Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import rateLimitMiddleware from "../../middleware/rateLimit.middleware";
import ErrorResponse from "../../models/errorResponse.model";
import userModel, { IUser } from "../../models/user.model";
import { sendCodeTemplate } from "../../modules/Email.module";
import { AbstractController } from "./auth.abstract";

@Controller('/auth', 1)
export class AuthenticationController extends AbstractController {
    @Route(RequestType.POST, '/login', rateLimitMiddleware)
    async HandleLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { username, password } = req.body;

        if (!username) return next(new ErrorResponse("Please provide a username", 401, "username"));
        if (!password) return next(new ErrorResponse("Please provide a password", 401, "password"));

        try {
            const user = await userModel.findOne({ username }).select("+password");
            if (!user) return next(new ErrorResponse("This user does not exist", 401, "username"));
            if (!(await user.matchPassword(password))) return next(new ErrorResponse("Incorrect Password", 401, "password"));
            sendToken(user, 200, res);
        } catch (e) {
            return next(e);
        }

    }

    @Route(RequestType.POST, '/register', rateLimitMiddleware)
    async HandleRegister(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { username, email, password, confirmPassword } = req.body;
        if (!password || !confirmPassword) return next(new ErrorResponse("Please provide a password", 401));
        if (confirmPassword !== password) return next(new ErrorResponse("Passwords don't match", 401));

        try {
            let code = Math.floor(100000 + Math.random() * 900000);
            const user = await userModel.create({ username, email, password, activationAuthCode: code, activationAuthCodeRefreshAt: new Date(Date.now() + (parseInt(process.env.EMAIL_CODE_REFRESH_MINUTES || "5") * 60 * 1000)) });
            await sendCodeTemplate(user.username, user.email, code.toString());

            sendToken(user, 201, res);
        } catch (e) {
            next(e);
        }
    }
}

const sendToken = (user: IUser, statusCode: number, res: Response) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token });
}