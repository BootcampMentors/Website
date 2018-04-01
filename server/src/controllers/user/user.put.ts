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

    /**
     * set mentorship status. 
     * The Id is to be pulled from session - therefore client be 
     * logged in to use this method, otherwise a 403/400 will be sent
     * 
     * @example
     * "PUT :// api/user/mentorship"
     */
    setmentor: (req: Request, res: Response) => {
        models.User.findById(req.session._id)
            .populate('mentees')
            .exec()
            .then(
                (user) => {

                    // if the client does not provide the next state of the mentor
                    // do a 400
                    if (req.body.isMentor === undefined) {
                        user.password = undefined;
                        return res.status(400).send(new ServerResponse(false, user, 'isMentor field not provided'));
                    }

                    // if isMentor is defined and isMentor is false while the document
                    // isMentor is true, then remove them as a mentor
                    else if (user.isMentor && !req.body.isMentor) {
                        doMentorRemovalProcess(user)
                            .then((unmentoredUser) => {
                                unmentoredUser.password = undefined;
                                res.status(200).send(new ServerResponse(true, unmentoredUser));
                            })
                            .catch(err => res.status(400).send(new ServerResponse(false, null, err)));
                    }

                    // if isMentor defined and did not satisfy the above condition
                    // check its vice versa
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

                    // if everything above evaluated to false
                    // then that means that the given next state equals the
                    // current state
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

        // sets mentor to absolute false
        // and resets and marks the mentees as removal
        mentorUser.isMentor = false;
        const mentees = mentorUser.mentees;
        mentorUser.mentees = [];
        mentorUser.markModified('mentees');

        // we must wait for each mentee to be finshed being spliced before
        // continuing towards the next step due to there being a pontential
        // parallel processed conflict
        await mentees.forEach(async (mentee) => {
            const pos = mentee.mentors.indexOf(mentorUser._id);
            mentee.mentors.splice(pos, 1);
            mentee.markModified('mentors');
            await mentee.save().catch(err => reject(err));
        });

        // removes the mentor from the camp master document
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

                                    // will only ever resolve if EVERYTHING
                                    // went through successfully

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

        // set as absolute true for mentor
        user.isMentor = true;

        // we need to push the new mentor into the master camp
        // document
        models.Camp.findById(user.camp as string)
            .then(
                (camp) => {
                    camp.mentors.push(user._id);
                    camp.save()
                        .then(
                            () => {
                                user.save()
                                    .then(

                                        // again only allows a resolve after 
                                        // everything went fine

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