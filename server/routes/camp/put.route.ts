import { Express } from 'express';
import { CampController } from '../../controllers/camp/camp.controller';

export const PutCampRoutes = (app: Express, rootRoute: string) => {
    app.put(`${rootRoute}/:id`, (req, res) => CampController.put.camp(req, res));
    app.put(`${rootRoute}/:id/name`, (req, res) => CampController.put.name(req, res));
    app.put(`${rootRoute}/:id/admin`, (req, res) => CampController.put.admin(req, res));
};