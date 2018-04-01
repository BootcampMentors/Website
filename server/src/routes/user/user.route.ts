import { Express } from 'express';
import { resolve as pathResolve } from 'path';
import { GetUserRoutes } from './get.route';
import { DeleteUserRoutes } from './delete.route';
import { PostUserRoutes } from './post.route';
import { PutUserRoutes } from './put.route';

export const UserRoutes = (app: Express, rootRoute: string) => {
    GetUserRoutes(app, rootRoute);
    PostUserRoutes(app, rootRoute);
    PutUserRoutes(app, rootRoute);
    DeleteUserRoutes(app, rootRoute);
};