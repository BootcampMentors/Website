import { combineReducers } from 'redux';
import { userReducer } from './User';
import { IStoreState } from '../StoreState';

export default combineReducers<IStoreState>({
    user: userReducer
});