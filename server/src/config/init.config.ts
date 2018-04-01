import * as express from 'express';
import { json as jsonParser } from 'body-parser';
import { join as joinPaths } from 'path';
import * as session from 'express-session';
import { readFileSync } from 'fs';
import { ISetupMap } from '../setupmap';
import { logger } from '../utils/logger.util';

const server = express();

server.use(jsonParser());

const setupJson: ISetupMap = JSON.parse(readFileSync(joinPaths(__dirname, './../setup.json')).toString());

server.use(
    session({
        secret: setupJson.sessionSecret,
        // will only save to session store if the session was modified, its not necessary
        resave: false,
        // will only create a session cookie regardless of the session objects state
        saveUninitialized: true
    })
);

server.use(
    express.static(
        joinPaths(__dirname, './../../../client/build/')
    )
);

server.use(
    '/static',
    express.static(
        joinPaths(__dirname, './../static')
    )
);

server.use(logger);

export const PORT = 3000, app = server, setupConfig = setupJson;
