import { ICamp } from '../formats/Camp.format';
import { SET_CAMPS } from '../actions/Camp';

interface ICampReducerWrapper {
    type: string;
    camps: Array<ICamp>;
}

export const campReducer = (
    state: Array<ICamp> = [],
    action: ICampReducerWrapper
) => {
    switch (action.type) {
        case SET_CAMPS:
            return action.camps;
        default:
            return state;
    }
};