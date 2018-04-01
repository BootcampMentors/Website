import { model } from 'mongoose';
import { Request, Response } from 'express';
import { IUserModel, IUser } from '../../formats/user.format';
import { ServerResponse } from '../../formats/serverresponse.format';

import { SHA256 } from 'crypto-js';
import { ICampModel, ICamp } from '../../formats/camp.format';
import { getUserNotExistMessage } from './user.controller';

const models = {
    User: model<IUserModel>('user'),
    Camp: model<ICampModel>('camp')
};

export const PostUserController = {
    user: (req: Request, res: Response) => {
        const newUser = new models.User(req.body);
        newUser.password = SHA256(req.body.password).toString();
        newUser.save()
            .then((user) => {
                addToCamp(user.camp as string, user); // yes its async its fine
                newUser.password = undefined;
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    login: (req: Request, res: Response) => {
        const attempt: IUser = req.body;
        models.User.findOne({ email: attempt.email })
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                const hashedPw = SHA256(attempt.password).toString();
                if (hashedPw === user.password) {
                    req.session._id = user._id;
                    user.password = undefined;
                    res.status(200).json(new ServerResponse(true, user));
                } else {
                    res.status(403).json(new ServerResponse(false, null, 'user information invalid'));
                }
            })
            .catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    }
};

const addToCamp = (campId: string, user: IUserModel) => {
    models.Camp.findById(campId)
        .then((camp) => {
            camp.mentees.push(user._id);
            camp.save()
                .catch((err) => console.log(err));
        }).catch((err) => console.log(err));
};