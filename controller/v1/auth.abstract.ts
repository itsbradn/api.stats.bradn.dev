import { NextFunction } from 'connect';
import { Request, Response } from 'express';

export abstract class AbstractController {
    abstract HandleLogin(req: Request, res: Response, next: NextFunction): void
}