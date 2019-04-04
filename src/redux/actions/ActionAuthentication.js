import { SIGN_IN } from '../actions/ActionTypes.js';
import Axios from 'axios';

const PATH_BASE = 'http://localhost:46439/api/v1/authentication';

export const signIn = (data) => dispatch => {
    const PATH_ACTION = '/signin';

    Axios({
        url: `${PATH_BASE}${PATH_ACTION}`,
        method: 'POST',
        data: data
    })
    .then(result => result.data)
    .then(data => dispatch({
        type: SIGN_IN,
        payload: data
    }));
}