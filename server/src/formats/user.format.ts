import { ICamp, ICampModel } from './camp.format';
import { IInterest } from './interest.format';
import { Document } from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isMentor: boolean;
    mentors: Array<IUserModel>;
    mentees: Array<IUserModel>;
    camp: ICampModel | string;
    interests: Array<IInterest>;
}

export class User implements IUser {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isMentor: boolean;
    mentors: IUserModel[];
    mentees: IUserModel[];
    camp: ICampModel | string;
    interests: IInterest[];
}

export interface IUserModel extends IUser, Document {

}