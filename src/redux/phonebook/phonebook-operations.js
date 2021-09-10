import { addContactApi, deleteContactApi, getContactsApi } from '../../services/Api';
import {
  fetchAddContactsError,
  fetchAddContactsRequest,
  fetchAddContactsSuccess,
  fetchDeleteContactsError,
  fetchDeleteContactsRequest,
  fetchDeleteContactsSuccess,
  fetchGetContactsError,
  fetchGetContactsRequest,
  fetchGetContactsSuccess,
} from './phonebook-actions';

export const getContacts = () => async dispatch => {
  dispatch(fetchGetContactsRequest());

  try {
    const contacts = await getContactsApi();
    dispatch(fetchGetContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchGetContactsError(error));
  }
};

export const addContact = contactData => async dispatch => {
  dispatch(fetchAddContactsRequest());

  try {
    const contact = await addContactApi(contactData);
    dispatch(fetchAddContactsSuccess(contact));
  } catch (error) {
    dispatch(fetchAddContactsError(error));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(fetchDeleteContactsRequest());

  try {
    await deleteContactApi(contactId);
    dispatch(fetchDeleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(fetchDeleteContactsError(error));
  }
};
