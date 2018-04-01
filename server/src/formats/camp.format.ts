import { IUser, IUserModel } from './user.format';
import { Document } from 'mongoose';

export interface ICamp {
    name: string;
    mentors: Array<IUserModel>;
    mentees: Array<IUserModel>;
    admins: Array<IUserModel>;
}

export class Camp implements ICamp {
    admins: IUserModel[];
    name: string;
    mentors: IUserModel[];
    mentees: IUserModel[];
}

export interface ICampModel extends ICamp, Document {

}