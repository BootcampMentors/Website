import { Express } from 'express';
import { CampController } from '../../controllers/camp/camp.controller';

export const DeleteCampRoutes = (app: Express, rootRoute: string) => {
    app.delete(`${rootRoute}/:id/mentors/:mentorId`, (req, res) => CampController.delete.mentor(req, res));
    app.put(`${rootRoute}/:id/admin/:adminId`, (req, res) => CampController.delete.admin(req, res));
};