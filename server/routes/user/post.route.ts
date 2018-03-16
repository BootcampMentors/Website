import { Express } from 'express';
import { resolve as pathResolve } from 'path';
import { UserController } from '../../controllers/user/user.controller';

export const PostUserRoutes = (app: Express, rootRoute: string) => {
    app.post(rootRoute, (req, res) => UserController.post.user(req, res));
    app.post(`${rootRoute}/login`, (req, res) => UserController.post.login(req, res));
};