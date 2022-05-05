import { Router } from "express";

export interface RouteType {
    path: string,
    router: Router,
}