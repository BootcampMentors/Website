import { model } from 'mongoose';
import { Request, Response } from 'express';
import { IUserModel } from '../../formats/user.format';
import { ServerResponse } from '../../formats/serverresponse.format';

const models = {
    User: model<IUserModel>('user')
};

export const PostUserController = {
    user: (req: Request, res: Response) => {
        const newUser = new models.User(req.body);
        newUser.save()
            .then((user) => {
                delete user.password;
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },
};