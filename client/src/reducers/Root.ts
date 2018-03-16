import { combineReducers } from 'redux';
import { userReducer } from './User';
import { IStoreState } from '../StoreState';
import { campReducer } from './Camp';
import { loginLogoutReducer } from './LoginLogout';

export default combineReducers<IStoreState>({
    user: userReducer,
    camps: campReducer,
    loginLogout: loginLogoutReducer
});