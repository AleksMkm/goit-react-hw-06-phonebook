import types from './types';
import { v4 as uniqueId } from 'uuid';

const addContact = (name, number) => ({
  type: types.CONTACT_ADD,
  payload: {
    id: uniqueId(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: types.CONTACT_DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.FILTER_CHANGE,
  payload: value,
});

const actions = { addContact, deleteContact, changeFilter };

export default actions;
