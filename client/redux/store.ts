import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import offerReducer from './offerReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    offers: offerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
