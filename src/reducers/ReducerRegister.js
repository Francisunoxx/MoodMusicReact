import { VALIDATE_EMAIL, VALIDATE_USERNAME } from '../actions/ActionTypes.js';

const initialState = {
    transaction: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case VALIDATE_EMAIL:
            console.log('VALIDATE_EMAIL');
            return {
                ...state,
                transaction: action.payload
            }
        default:
            return state;
    }
}