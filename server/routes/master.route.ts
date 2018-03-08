import { Express } from 'express';
import { resolve as pathResolve } from 'path';
import { UserRoutes } from './user/user.route';

export const routes = (app: Express) => {
    UserRoutes(app, '/api/user');
    app.get('/', (req, res) => res.sendFile(pathResolve(__dirname, './../../../client/build/index.html')));
};