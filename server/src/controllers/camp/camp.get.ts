import { model } from 'mongoose';
import { Request, Response } from 'express';
import { ICampModel } from '../../formats/camp.format';
import { getCampNotExistMessage } from './camp.controller';
import { ServerResponse } from '../../formats/serverresponse.format';

const models = {
    Camp: model<ICampModel>('camp')
}

export const GetCampController = {

    /**
     * camp by id
     * 
     * @example "GET: // api/camps/0"
     */
    id: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id)
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                return res.status(200).json(new ServerResponse(true, camp));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * camp by id, populates mentors and responds with IUser[]
     * 
     * @example "GET: // api/camps/0/mentors"
     */
    mentors: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id).populate('mentors').exec()
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, camp.mentors));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * camp by id, populates mentees and responds with IUser[]
     * 
     * @example "GET: // api/camps/0/mentees"
     */
    mentees: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id).populate('mentees').exec()
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, camp.mentees));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * camp by id, populates admins and responds with IUser[]
     * 
     * @example "GET :// api/camps/0/admins"
     */
    admins: (req: Request, res: Response) => {
        models.Camp.findById(req.params.id).populate('admins').exec()
            .then((camp) => {
                if (!camp) {
                    return res.status(400).json(getCampNotExistMessage());
                }
                res.status(200).json(new ServerResponse(true, camp.admins));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },

    /**
     * camp by id, populates all properties and responds with the whole ICamp object
     * 
     * @example "GET: // api/camps/0/all"
     */
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

    /**
     * retrieve all camps currently stored in mongo, 
     * 
     * @example "GET: // api/camps"
     */
    camps: (req: Request, res: Response) => {
        models.Camp.find()
            .then((camps) => res.status(200).json(new ServerResponse(true, camps)))
            .catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    }
};