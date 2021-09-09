import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/Add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction('phonebook/Delete');

export const changeFilter = createAction('phonebookChangeFilter');
