import { Request } from "express";
import { IUser } from "../models/user.model";

export enum RequestType {
    GET,
    POST,
    PUT,
    DEL
}