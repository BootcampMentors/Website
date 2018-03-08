import { ICamp, ICampModel } from './camp.format';
import { IInterest } from './interest.format';
import { Document } from 'mongoose';

export interface IUser {
    username: string;
    email: string;
    password: string;
    isAdmin: string;
    isMentor: string;
    mentors: Array<IUserModel>;
    mentees: Array<IUserModel>;
    camp: ICampModel | string;
    interests: Array<IInterest>;
}

export class User implements IUser {
    username: string;
    email: string;
    password: string;
    isAdmin: string;
    isMentor: string;
    mentors: IUserModel[];
    mentees: IUserModel[];
    camp: ICampModel | string;
    interests: IInterest[];
}

export interface IUserModel extends IUser, Document {

}