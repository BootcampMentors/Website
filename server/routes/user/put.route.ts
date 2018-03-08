import { Express } from 'express';
import { resolve as pathResolve } from 'path';
import { UserController } from '../../controllers/user/user.controller';

export const PutUserRoutes = (app: Express, rootRoute: string) => {
    app.put(`${rootRoute}/mentors`, (req, res) => UserController.put.mentor(req, res));
    app.put(`${rootRoute}/mentees`, (req, res) => UserController.put.mentee(req, res));
    app.put(`${rootRoute}/setmentor`, (req, res) => UserController.put.setmentor(req, res));
    app.put(`${rootRoute}/setadmin`, (req, res) => UserController.put.setadmin(req, res));
    app.put(`${rootRoute}/interests`, (req, res) => UserController.put.interest(req, res));
    app.put(rootRoute, (req, res) => UserController.put.user(req, res));
};