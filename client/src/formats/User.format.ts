import { ICamp } from './Camp.format';
import { IInterest } from './Interest.format';

export interface IUser {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isMentor: boolean;
    mentors: Array<IUser>;
    mentees: Array<IUser>;
    camp: ICamp | string;
    interests: Array<IInterest>;
    confirmPassword: string;
}

export class User implements IUser {
    confirmPassword: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isMentor: boolean;
    mentors: IUser[];
    mentees: IUser[];
    camp: string | ICamp;
    interests: IInterest[];
}