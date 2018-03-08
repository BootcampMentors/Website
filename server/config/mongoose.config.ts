import * as mongoose from 'mongoose';
import { readdirSync } from 'fs';
import { join as joinPaths } from 'path';

mongoose.connect('mongodb://localhost/bootcampmentors');

readdirSync(joinPaths(__dirname, './../models/')).forEach((model) => {
    if (model.indexOf('.ts') > 0) {
        require(joinPaths(__dirname, `./../models/${model}`));
    }
});