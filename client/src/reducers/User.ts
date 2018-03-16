import { IUser, User } from '../formats/User.format';
import { SET_USER } from '../actions/User';

interface IUserReducerWrapper {
    user: IUser;
    type: string;
}

export const userReducer = (state: IUser = new User(), action: IUserReducerWrapper) => {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
};