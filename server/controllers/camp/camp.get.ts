import { model } from 'mongoose';
import { Request, Response } from 'express';
import { ICampModel } from '../../formats/camp.format';
import { getCampNotExistMessage } from './camp.controller';
import { ServerResponse } from '../../formats/serverresponse.format';

const models = {
    Camp: model<ICampModel>('camp')
}

export const GetCampController = {
    id: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id)
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                return res.status(200).json(new ServerResponse(true, camp));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },
    mentors: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id).populate('mentors').exec()
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, camp.mentors));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },
    mentees: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id).populate('mentees').exec()
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, camp.mentees));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },
    admins: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id).populate('admins').exec()
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, camp.admins));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },
    all: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id)
            .populate('mentees')
            .populate('mentors')
            .exec()
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, camp));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },
};