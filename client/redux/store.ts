import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './slice';

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
