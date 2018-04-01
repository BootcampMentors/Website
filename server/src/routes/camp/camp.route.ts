import { Express } from 'express';
import { GetCampRoutes } from './get.route';
import { PostCampRoutes } from './post.route';

export const CampRoutes = (app: Express, rootRoute: string) => {
    GetCampRoutes(app, rootRoute);
    PostCampRoutes(app, rootRoute);
};