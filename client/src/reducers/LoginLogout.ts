import { LOGIN_USER, LOGOUT_USER } from '../actions/LoginLogout';

interface ILoginLogoutReducerWrapper {
    isLoggedIn: boolean;
    type: string;
}

export const loginLogoutReducer = (state: boolean = false, action: ILoginLogoutReducerWrapper) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.isLoggedIn;
        case LOGOUT_USER:
            return action.isLoggedIn;
        default:
            return state;
    }
};