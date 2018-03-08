import { model } from 'mongoose';
import { Request, Response } from 'express';
import { ICampModel } from '../../formats/camp.format';
import { ServerResponse } from '../../formats/serverresponse.format';

const models = {
    Camp: model<ICampModel>('camp')
};

export const PostCampController = {
    camp: (req: Request, res: Response) => {
        const newCamp = new models.Camp(req.body);
        newCamp.save()
            .then((camp) => {
                res.status(201).json(new ServerResponse(true, camp));
            }).catch((err) => res.status(400).json(new ServerResponse(false, null, err)));
    },
};