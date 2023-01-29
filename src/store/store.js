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
import { wordsReducer } from "./words/words-slice"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['words']
  }

const persistedWordsReducer = persistReducer(persistConfig, wordsReducer)

export const store = configureStore({
    reducer: {
        words: persistedWordsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)