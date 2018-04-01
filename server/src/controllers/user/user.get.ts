import { model } from 'mongoose';
import { Request, Response } from 'express';
import { IUserModel } from '../../formats/user.format';
import { ServerResponse } from '../../formats/serverresponse.format';
import { getUserNotExistMessage } from './user.controller';

const models = {
    User: model<IUserModel>('user')
};

export const GetUserController = {
    /**
     * user by id
     * 
     * @example "GET: // api/users/0"
     */
    id: (req: Request, res: Response) => {
        models.User.findById(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                user.password = undefined;
                res.status(200).json(new ServerResponse(true, user));
            })
            .catch((err) => {
                res.status(400).json(new ServerResponse(false, null, err));
            });
    },
    
    /**
     * populate mentors list of user by id, responses with IUser[] representing
     * the mentors
     * 
     * @example "GET :// api/users/0/mentors"
     */
    mentors: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('mentors').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user.mentors));
            })
            .catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * populate mentees list of user by id, responsed with IUser[] representing
     * the mentees
     * 
     * @example "GET :// api/users/0/mentees"
     */
    mentees: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('mentees').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user.mentees));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * populate interests list of user by id, responsed with IInterest[]
     * 
     * @example "GET :// api/users/0/interests"
     */
    interests: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('interests').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user.interests));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * populates camp property of user by id, responds with ICamp
     * 
     * @example "GET :// api/users/0/camp"
     */
    camp: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('camp').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user.camp));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * populates all populated fields in a given user by id, responds with IUser
     * 
     * @example "GET :// api/users/0/all"
     */
    all: (req: Request, res: Response) => {
        models.User.findById(req.params.id)
            .populate('mentees')
            .populate('mentors')
            .populate('camp')
            .populate('interests')
            .exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                user.password = undefined;
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * retrieves the user from his session object
     * 
     * @example "GET :// api/session/user"
     */
    getFromSession: (req: Request, res: Response) => {
        models.User.findById(req.session._id)
            .then((user) => {
                if (!user) {
                    // its not 400 or 401 because axios doesn't play nice and keeps
                    // logging console errors even though im ignoring in the promise catch
                    return res.status(200).json(getUserNotExistMessage());
                }

                // safety measure - you can do this also with selectExclusively but
                // this seems more easy to understand. Just to be clear, mongo stores
                // only a 256-Bit SHA hash of the password as well
                user.password = undefined;
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * clears session id
     * 
     * @example "GET :// api/session/logout"
     */
    logout: (req: Request, res: Response) => {
        req.session._id = undefined;
        return res.status(200).json(new ServerResponse(true, 'session deleted'));
    }
};