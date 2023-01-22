import { configureStore } from '@reduxjs/toolkit';import { contactsReducer, filterReducer } from './reducer';

export const store = configureStore({
  reducer: {
    tasks: contactsReducer,
    filters: filterReducer,
  },
});
