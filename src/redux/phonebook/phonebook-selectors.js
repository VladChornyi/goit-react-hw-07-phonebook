import { createSelector } from '@reduxjs/toolkit';

export const getContactsSelector = state => state.phonebook.items;
export const getFilterSelector = state => state.phonebook.filter;

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};

export const getFilteredContactsSelector = createSelector(
  [getContactsSelector, getFilterSelector],
  (allContacts, filter) => getFilteredContacts(allContacts, filter),
);
