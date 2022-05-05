import {Express} from "express-serve-static-core";
import { IUser } from "./models/user.model"

declare global {
  namespace Express {
    interface Request {
        user: IUser;
    }
  }
}