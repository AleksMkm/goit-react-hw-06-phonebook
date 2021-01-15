import { combineReducers } from 'redux';
import types from './types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.CONTACT_ADD:
      return [...state, payload];

    case types.CONTACT_DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CHANGE:
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
