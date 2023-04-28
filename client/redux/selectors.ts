import {RootState} from './store';

export const all = (state: RootState) => {
  console.log('INFO', state);

  return state.booksReducer.data;
};

export const inCart = (state: RootState) => all(state).filter(book => book.inCart);
