import { Express } from 'express';
import { resolve as pathResolve } from 'path';
import { UserController } from '../../controllers/user/user.controller';

export const DeleteUserRoutes = (app: Express, rootRoute: string) => {
    app.delete(`${rootRoute}/:id/mentors/:mId`, (req, res) => UserController.delete.mentor(req, res));
    app.delete(`${rootRoute}/:id/mentees/:mId`, (req, res) => UserController.delete.mentee(req, res));
    app.delete(`${rootRoute}/interests/:iId`, (req, res) => UserController.delete.interest(req, res));
};