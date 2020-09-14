import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  employees: employeeReducer
});
