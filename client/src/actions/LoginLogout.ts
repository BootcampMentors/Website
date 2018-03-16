export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const setToLoggedIn = () => {
    return {
        type: LOGIN_USER,
        isLoggedIn: true
    };
};

export const setToLoggedOut = () => {
    return {
        type: LOGOUT_USER,
        isLoggedIn: false
    };
};