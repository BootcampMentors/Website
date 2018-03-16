import { IUser } from './User.format';

export interface ICamp {
    name: string;
    mentors: Array<IUser>;
    mentees: Array<IUser>;
    admins: Array<IUser>;
}

export class Camp implements ICamp {
    admins: IUser[];
    name: string;
    mentors: IUser[];
    mentees: IUser[];
}
