import { IUser } from './formats/User.format';
import { ICamp } from './formats/Camp.format';

export interface IStoreState {
    readonly user: IUser;
    readonly camps: Array<ICamp>;
}