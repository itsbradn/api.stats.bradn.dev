import { Response, Request, NextFunction } from 'express';

export abstract class AbstractController {
    abstract GetPlayer(req: Request, res: Response, next: NextFunction): void
    abstract GetTexture(req: Request, res: Response, next: NextFunction): void
    abstract ApplyLinkCode(req: Request, res: Response, next: NextFunction): void
}