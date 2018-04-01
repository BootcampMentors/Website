import { model } from 'mongoose';
import { Request, Response } from 'express';
import { IUserModel } from '../../formats/user.format';
import { ServerResponse } from '../../formats/serverresponse.format';
import { ICampModel } from '../../formats/camp.format';

const models = {
    User: model<IUserModel>('user'),
    Camp: model<ICampModel>('camp')
}

export const PutUserController = {
    user: (req: Request, res: Response) => {
        //
    },
    mentor: (req: Request, res: Response) => {
        //
    },
    mentee: (req: Request, res: Response) => {
        //
    },
    setmentor: (req: Request, res: Response) => {
        models.User.findById(req.session._id)
            .populate('mentees')
            .exec()
            .then(
                (user) => {
                    if (req.body.isMentor === undefined) {
                        user.password = undefined;
                        return res.status(400).send(new ServerResponse(false, user, 'isMentor field not provided'));
                    }
                    else if (user.isMentor && !req.body.isMentor) {
                        doMentorRemovalProcess(user)
                            .then((unmentoredUser) => {
                                unmentoredUser.password = undefined;
                                res.status(200).send(new ServerResponse(true, unmentoredUser));
                            })
                            .catch(err => res.status(400).send(new ServerResponse(false, null, err)));
                    }
                    else if (!user.isMentor && req.body.isMentor) {
                        doMentorAdditionProcess(user)
                            .then(
                                (mentoredUser) => {
                                    mentoredUser.password = undefined;
                                    res.status(200).send(new ServerResponse(true, mentoredUser));
                                }
                            )
                            .catch(err => res.status(400).send(new ServerResponse(false, null, err)));
                    }
                    else {
                        return res.status(400).send(new ServerResponse(false, null, 'already set to given boolean'));
                    }
                }
            )
            .catch((err) => res.status(400).send(new ServerResponse(false, null, err)));
    },
    setadmin: (req: Request, res: Response) => {
        //
    },
    interest: (req: Request, res: Response) => {
        //
    },
};

const doMentorRemovalProcess = (mentorUser: IUserModel) => {
    return new Promise<IUserModel>(async (resolve, reject) => {
        mentorUser.isMentor = false;
        const mentees = mentorUser.mentees;
        mentorUser.mentees = [];
        mentorUser.markModified('mentees');

        await mentees.forEach(async (mentee) => {
            const pos = mentee.mentors.indexOf(mentorUser._id);
            mentee.mentors.splice(pos, 1);
            mentee.markModified('mentors');
            await mentee.save().catch(err => reject(err));
        });

        models.Camp.findById(mentorUser.camp as string)
            .then((camp) => {
                const pos = camp.mentors.indexOf(mentorUser._id);
                camp.mentors.splice(pos, 1);
                camp.markModified('mentors');
                camp.save()
                    .then(
                        () => {
                            mentorUser.save()
                                .then(
                                    (user) => resolve(user)
                                )
                                .catch(err => console.log(err));
                        }
                    )
                    .catch(err => reject(err));
            })
            .catch((err) => console.log(err));
    });
}

const doMentorAdditionProcess = (user: IUserModel) => {
    return new Promise<IUserModel>((resolve, reject) => {
        user.isMentor = true;
        models.Camp.findById(user.camp as string)
            .then(
                (camp) => {
                    camp.mentors.push(user._id);
                    camp.save()
                        .then(
                            () => {
                                user.save()
                                    .then(
                                        (mentorUser) => resolve(mentorUser)
                                    )
                                    .catch(err => reject(err));
                            }
                        )
                        .catch(err => reject(err));
                }
            )
            .catch(err => reject(err));
    })
}