import { model } from 'mongoose';
import { Request, Response } from 'express';
import { IUserModel } from '../../formats/user.format';
import { ServerResponse } from '../../formats/serverresponse.format';

import { SHA256 } from 'crypto-js';
import { ICampModel, ICamp } from '../../formats/camp.format';

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
};

const addToCamp = (campId: string, user: IUserModel) => {
    models.Camp.findById(campId)
        .then((camp) => {
            camp.mentees.push(user._id);
            camp.save()
                .catch((err) => console.log(err));
        }).catch((err) => console.log(err));
};