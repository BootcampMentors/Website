import { ICamp } from './camp.format';
import { IInterest } from './interest.format';
import { Document } from 'mongoose';

export interface IUser {
    username: string;
    email: string;
    password: string;
    isAdmin: string;
    isMentor: string;
    mentors: Array<IUser>;
    mentees: Array<IUser>;
    camp: ICamp | string;
    interests: Array<IInterest>;
}

export class User implements IUser {
    username: string;
    email: string;
    password: string;
    isAdmin: string;
    isMentor: string;
    mentors: IUser[];
    mentees: IUser[];
    camp: ICamp | string;
    interests: IInterest[];
}

export interface IUserModel extends IUser, Document {

}