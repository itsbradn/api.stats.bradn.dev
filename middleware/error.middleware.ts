import { NextFunction } from "connect";
import { Request, Response } from "express";
import ErrorResponse from "../models/errorResponse.model";

export default (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    let error = {...err};

    error.message = err.message;
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
    })
}