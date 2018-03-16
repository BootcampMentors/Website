import { IUser, User } from '../formats/User.format';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const setUser = (user: IUser) => {
    return {
        type: SET_USER,
        user: user
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
        user: new User()
    };
};