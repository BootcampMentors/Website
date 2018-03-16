import { Express } from 'express';
import { resolve as pathResolve } from 'path';
import { UserController } from '../../controllers/user/user.controller';

export const GetUserRoutes = (app: Express, rootRoute: string) => {
    app.get(`${rootRoute}/:id`, (req, res) => UserController.get.id(req, res));
    app.get(`${rootRoute}/:id/mentors`, (req, res) => UserController.get.mentors(req, res));
    app.get(`${rootRoute}/:id/mentees`, (req, res) => UserController.get.mentees(req, res));
    app.get(`${rootRoute}/:id/interests`, (req, res) => UserController.get.interests(req, res));
    app.get(`${rootRoute}/:id/getsession`, (req, res) => UserController.get.getFromSession(req, res));
    app.get(`${rootRoute}/:id/logout`, (req, res) => UserController.get.logout(req, res));
    app.get(`${rootRoute}/:id/camp`, (req, res) => UserController.get.camp(req, res));
    app.get(`${rootRoute}/:id/all`, (req, res) => UserController.get.all(req, res));
};