import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './booksReducer';
import offerReducer from './offerReducer';

const store = configureStore({
  reducer: {
    books: booksReducer,
    offers: offerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
