import { CREATE_USER } from './ActionTypes.js';
import Axios from 'axios';

const PATH_BASE = 'http://localhost:46439/api/v1/register';

export const createUser = (data) => dispatch => {
    const PATH_ACTION = '/create';

    Axios({
        url: `${PATH_BASE}${PATH_ACTION}`,
        method: 'POST',
        data: data
    })
    .then(result => result.data)
    .then(data => dispatch({
        type: CREATE_USER,
        payload: data
    }));
}