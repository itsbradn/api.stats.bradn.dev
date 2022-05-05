import { Request } from "express";

export enum RequestType {
    GET,
    POST,
    PUT,
    DEL
}

export interface ProtectedRequest extends Request {
    user: any
}