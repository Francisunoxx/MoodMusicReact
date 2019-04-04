import { combineReducers } from 'redux';
import ReducerRegister from './ReducerRegister.js';
import ReducerAuthentication from './ReducerAuthentication.js';

export default combineReducers({
   register: ReducerRegister,
   authentication: ReducerAuthentication
});