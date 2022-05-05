import { NextFunction, Request, Response } from "express";
import { RequestType } from "../../constant/request.constant";
import Controller from "../../decorator/controller.decorator";
import Route from "../../decorator/route.decorator";
import rateLimitMiddleware from "../../middleware/rateLimit.middleware";
import ErrorResponse from "../../models/errorResponse.model";
import userModel, { IUser } from "../../models/user.model";
import { AbstractController } from "./auth.abstract";

@Controller('/auth', 1)
export class AuthorizationController extends AbstractController {
    @Route(RequestType.POST, '/login', rateLimitMiddleware)
    async HandleLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { username, password } = req.body;

        if (!username) return next(new ErrorResponse("Please provid a username", 401, "username"));
        if (!password) return next(new ErrorResponse("Please provid a password", 401, "password"));

        try {
            const user = await userModel.findOne({ username }).select("+password");
            if (!user) return next(new ErrorResponse("This user does not exist", 401, "username"));
            if (!(await user.matchPassword(password))) return next(new ErrorResponse("Incorrect Password", 401, "password"));
            sendToken(user, 200, res);
        } catch (e) {
            return next(e);
        }

    }
}

const sendToken = (user: IUser, statusCode: number, res: Response) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token });
}