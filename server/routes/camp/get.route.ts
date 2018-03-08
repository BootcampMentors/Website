import { Express } from 'express';
import { CampController } from '../../controllers/camp/camp.controller';

export const GetCampRoutes = (app: Express, rootRoute: string) => {
    app.get(`${rootRoute}/:id`, (req, res) => CampController.get.id(req, res));
    app.get(`${rootRoute}/:id/mentors`, (req, res) => CampController.get.mentors(req, res));
    app.get(`${rootRoute}/:id/mentees`, (req, res) => CampController.get.mentees(req, res));
    app.get(`${rootRoute}/:id/all`, (req, res) => CampController.get.all(req, res));
};