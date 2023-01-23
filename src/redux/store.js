import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from 'redux';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedContactsReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedContactsReduser,
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
