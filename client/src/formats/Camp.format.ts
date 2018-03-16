import { IUser } from './User.format';

export interface ICamp {
    _id: string;
    name: string;
    mentors: Array<IUser>;
    mentees: Array<IUser>;
    admins: Array<IUser>;
}

export class Camp implements ICamp {
    _id: string;
    admins: IUser[];
    name: string;
    mentors: IUser[];
    mentees: IUser[];
}
