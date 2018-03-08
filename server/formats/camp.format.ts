import { IUser } from './user.format';
import { Document } from 'mongoose';

export interface ICamp {
    name: string;
    mentors: Array<IUser>;
    mentees: Array<IUser>;
}

export class Camp implements ICamp {
    name: string;
    mentors: IUser[];
    mentees: IUser[];
}

export interface ICampModel extends ICamp, Document {

}