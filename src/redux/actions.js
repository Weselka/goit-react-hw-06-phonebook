import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', ({ name, number }) => {
  return {
    payload: {
      id: nanoid(),
      name: name.value,
      number: number.value,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact', contactId => {
  return {
    payload: contactId,
  };
});

export const setChangesFilter = createAction('filter/setChangesFilter', value => {
  return {
    payload: value,
  };
});
