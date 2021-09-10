import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  changeFilter,
  fetchGetContactsSuccess,
  fetchAddContactsSuccess,
  fetchDeleteContactsSuccess,
  fetchGetContactsError,
  fetchAddContactsError,
  fetchDeleteContactsError,
  fetchGetContactsRequest,
  fetchAddContactsRequest,
  fetchDeleteContactsRequest,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchGetContactsSuccess]: (_, { payload }) => payload,
  [fetchAddContactsSuccess]: (state, { payload }) => [...state, payload],
  [fetchDeleteContactsSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchGetContactsError]: (_, action) => action.message,
  [fetchGetContactsRequest]: () => null,
  [fetchAddContactsError]: (_, action) => action.message,
  [fetchAddContactsRequest]: () => null,
  [fetchDeleteContactsError]: (_, action) => action.message,
  [fetchDeleteContactsRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  error,
});
