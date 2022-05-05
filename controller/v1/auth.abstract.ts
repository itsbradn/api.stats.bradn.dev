import { Request, Response, NextFunction } from 'express';

export abstract class AbstractController {
    abstract HandleLogin(req: Request, res: Response, next: NextFunction): void
    abstract HandleRegister(req: Request, res: Response, next: NextFunction): void
}