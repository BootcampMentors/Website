import * as express from 'express';

export const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`${req.method}:// ${req.originalUrl}`);
    next();
};