import employees from '../apis/employees';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_EMPLOYEE,
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createEmployee = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await employees.post('/employees', { ...formValues, userId });

  dispatch({ type: CREATE_EMPLOYEE, payload: response.data });
  history.push('/');
};

export const fetchEmployees = () => async dispatch => {
  const response = await employees.get('/employees');

  dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
};

export const fetchEmployee = id => async dispatch => {
  const response = await employees.get(`/employees/${id}`);

  dispatch({ type: FETCH_EMPLOYEE, payload: response.data });
};

export const editEmployee = (id, formValues) => async dispatch => {
  const response = await employees.patch(`/employees/${id}`, formValues);

  dispatch({ type: EDIT_EMPLOYEE, payload: response.data });
  history.push('/');
};

export const deleteEmployee = id => async dispatch => {
  await employees.delete(`/employees/${id}`);

  dispatch({ type: DELETE_EMPLOYEE, payload: id });
  history.push('/');
};
