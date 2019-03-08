import { VALIDATE_EMAIL, VALIDATE_USERNAME } from './ActionTypes.js';
import Axios from 'axios';

const PATH_BASE = 'http://localhost:46439/api/v1/register';

export const validateEmail = () => dispatch => {
    console.log('fetching');
    const PATH_ACTION = '/validate-email';

    Axios({
        url: `${PATH_BASE}${PATH_ACTION}`,
        method: 'POST',
        data: {
            Email: 'francisunoxx@gmail.com'
        }
    })
    .then(result => result.data)
    .then(data => dispatch({
        type: VALIDATE_EMAIL,
        payload: data
    }));
}
