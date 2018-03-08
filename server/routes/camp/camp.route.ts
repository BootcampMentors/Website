import { Express } from 'express';
import { DeleteCampRoutes } from './delete.route';
import { GetCampRoutes } from './get.route';
import { PostCampRoutes } from './post.route';
import { PutCampRoutes } from './put.route';

export const CampRoutes = (app: Express, rootRoute: string) => {
    GetCampRoutes(app, rootRoute);
    PostCampRoutes(app, rootRoute);
    PutCampRoutes(app, rootRoute);
    DeleteCampRoutes(app, rootRoute);
};