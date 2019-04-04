import { SIGN_IN } from '../actions/ActionTypes.js';

const initialState = {
    transaction: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                transaction: action.payload
            }
        default:
            return state;
    }
}