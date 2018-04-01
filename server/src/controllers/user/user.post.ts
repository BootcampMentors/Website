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

    /**
     * new user creation
     * 
     * @example
     * "POST :// api/user"
     * 
     * // has incomming request 
     * // with application/json as Content-Type
     * 
     * // example json body
     * const body = {
     *      camp: "Coding Dojo",
     *      email: "Emil Choparinov",
     *      username: "Emil",
     *      // make sure to hash this before sending the json
     *      password: "Password"
     * }
     */
    user: (req: Request, res: Response) => {
        const newUser = new models.User(req.body);
        newUser.password = SHA256(req.body.password).toString();
        newUser.save()
            .then((user) => {
                _addToCamp(user.camp as string, user); // yes its async its fine
                newUser.password = undefined;
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * login with existing user
     * 
     * @example
     * "POST :// api/user/login"
     * 
     * // has incomming request 
     * // with application/json as Content-Type
     * 
     * // example json body
     * const body = {
     *      email: "Emil Choparinov",
     *      // make sure to hash this before sending the json
     *      password: "Password"
     * }
     */
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

/**
 * pushes a new users id to the master camp object
 * @param campId id of camp to add
 * @param user user model pulled from mongo
 */
const _addToCamp = (campId: string, user: IUserModel) => {
    models.Camp.findById(campId)
        .then((camp) => {
            camp.mentees.push(user._id);
            camp.save()
                .catch((err) => console.log(err));
        }).catch((err) => console.log(err));
};