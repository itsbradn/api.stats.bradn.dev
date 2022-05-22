import { Response, Request, NextFunction } from 'express';

export abstract class AbstractController {
    abstract AddEmoji(req: Request, res: Response, next: NextFunction): void
}