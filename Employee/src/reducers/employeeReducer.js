import _ from 'lodash';
import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEES,
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_EMPLOYEE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EMPLOYEE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_EMPLOYEE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_EMPLOYEE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
