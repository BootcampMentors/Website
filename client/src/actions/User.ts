import { IUser } from '../formats/User.format';
export const SET_USER = 'SET_USER';

export const setUser = (user: IUser) => {
    return {
        type: SET_USER,
        user: user
    };
};