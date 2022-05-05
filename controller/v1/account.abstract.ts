import { Response, Request, NextFunction } from 'express';

export abstract class AbstractController {
    abstract GetDetails(req: Request, res: Response, next: NextFunction): void
}