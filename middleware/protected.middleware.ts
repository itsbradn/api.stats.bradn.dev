import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { decoded } from "../constant/jwtToken.constant";
import ErrorResponse from "../models/errorResponse.model";
import userModel from "../models/user.model";

export default async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(new ErrorResponse("Not Authorized", 401));
    }

    try {
        const decoded = <decoded> new Object(verify(token, process.env.JWT_SECRET || "nosecret"));
        const user = await userModel.findById(decoded.id);

        if (!user) {
            return next(new ErrorResponse("Invalid Token", 404));
        }

        req.user = user;
        next();
    } catch (e) {
        return next(new ErrorResponse("Not Authorized", 401));
    }
}