import { model, Error } from 'mongoose';
import { Request, Response } from 'express';
import { IUserModel } from '../../formats/user.format';
import { ServerResponse } from '../../formats/serverresponse.format';
import { getUserNotExistMessage } from './user.controller';

const models = {
    User: model<IUserModel>('user')
};

export const GetUserController = {
    id: (req: Request, res: Response) => {
        models.User.findById(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user));
            })
            .catch((err: Error) => {
                if (err.name === 'CastError') {
                    return res.status(400).json(new ServerResponse(false, null, 'id invalid'));
                }
                res.status(400).json(new ServerResponse(false, null, err));
            });
    },
    mentors: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('mentors').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user));
            })
            .catch((err) => {
                if (err.name === 'CastError') {
                    return res.status(400).json(new ServerResponse(false, null, 'id invalid'));
                }
                res.status(400).json(new ServerResponse(false, null, err));
            });
    },
    mentees: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('mentees').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => {
                if (err.name === 'CastError') {
                    return res.status(400).json(new ServerResponse(false, null, 'id invalid'));
                }
                res.status(400).json(new ServerResponse(false, null, err));
            });
    },
    interests: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('interests').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => {
                if (err.name === 'CastError') {
                    return res.status(400).json(new ServerResponse(false, null, 'id invalid'));
                }
                res.status(400).json(new ServerResponse(false, null, err));
            });
    },
    camp: (req: Request, res: Response) => {
        models.User.findById(req.params.id).populate('camp').exec()
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => {
                if (err.name === 'CastError') {
                    return res.status(400).json(new ServerResponse(false, null, 'id invalid'));
                }
                res.status(400).json(new ServerResponse(false, null, err));
            });
    },
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
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => {
                if (err.name === 'CastError') {
                    return res.status(400).json(new ServerResponse(false, null, 'id invalid'));
                }
                res.status(400).json(new ServerResponse(false, null, err));
            });
    },
    getFromSession: (req: Request, res: Response) => {
        models.User.findById(req.session._id)
            .then((user) => {
                if (!user) {
                    return res.status(400).json(getUserNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, user));
            }).catch((err) => {
                if (err.name === 'CastError') {
                    return res.status(400).json(new ServerResponse(false, null, 'id invalid'));
                }
                res.status(400).json(new ServerResponse(false, null, err));
            });
    }
};