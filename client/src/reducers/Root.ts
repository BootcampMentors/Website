import { combineReducers } from 'redux';
import { userReducer } from './User';
import { IStoreState } from '../StoreState';
import { campReducer } from './Camp';

export default combineReducers<IStoreState>({
    user: userReducer,
    camps: campReducer
});