import { Request, Response } from 'express';

export abstract class AbstractController {
    abstract GetDetails(req: Request, res: Response): void
}