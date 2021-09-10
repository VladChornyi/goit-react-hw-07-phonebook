import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('phonebook/Delete');

export const changeFilter = createAction('phonebook/ChangeFilter');

export const fetchGetContactsRequest = createAction('phonebook/getContactsRequest');
export const fetchGetContactsSuccess = createAction('phonebook/getContactsSuccess');
export const fetchGetContactsError = createAction('phonebook/getContactsError');

export const fetchAddContactsRequest = createAction('phonebook/AddContactsRequest');
export const fetchAddContactsSuccess = createAction('phonebook/AddContactsSuccess');
export const fetchAddContactsError = createAction('phonebook/AddContactsError');

export const fetchDeleteContactsRequest = createAction('phonebook/DeleteContactsRequest');
export const fetchDeleteContactsSuccess = createAction('phonebook/DeleteContactsSuccess');
export const fetchDeleteContactsError = createAction('phonebook/DeleteContactsError');
