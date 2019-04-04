import { CREATE_USER } from '../actions/ActionTypes.js';

const initialState = {
    transaction: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                transaction: action.payload
            }
        default:
            return state;
    }
}