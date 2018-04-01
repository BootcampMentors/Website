import { Express } from 'express';
import { CampController } from '../../controllers/camp/camp.controller';

export const PostCampRoutes = (app: Express, rootRoute: string) => {
    app.post(`${rootRoute}`, (req, res) => CampController.post.camp(req, res));
};