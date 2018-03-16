import { ICamp } from '../formats/Camp.format';
export const SET_CAMPS = 'SET_CAMPS';

export const setCamps = (camps: Array<ICamp>) => {
    return {
        type: SET_CAMPS,
        camps: camps
    };
};