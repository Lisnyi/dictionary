import { configureStore } from "@reduxjs/toolkit";
import { persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { dictionaryReducer } from './dictionary'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['dictionary']
  }

const persistedDictionaryReducer = persistReducer(persistConfig, dictionaryReducer)

export const store = configureStore({
    reducer: {
        dictionary: persistedDictionaryReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)