import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {BooksState} from '../types';
import axios from 'axios';

const initialState: BooksState = {
  data: [
    {
      cover: '',
      title: 'Title',
      author: 'name 1',
      rating: 4.0,
      price: 12.75,
      inCart: false,
    },
    {
      cover: '',
      title: 'Title 2',
      author: 'NAME 124912849',
      rating: 2.7,
      price: 0.25,
      inCart: false,
    },
    {
      cover: '',
      title: 'Title 3',
      author: '---------------',
      rating: 4.8,
      price: 7.99,
      inCart: true,
    },
    {
      cover: '',
      title: 'Title 4',
      author: '///////////////////',
      rating: 3.1,
      price: 3.0,
      inCart: false,
    },
  ],
  status: 'idle',
};

// const booksAdapter = createEntityAdapter();

// const initialState = booksAdapter.getInitialState();

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    rateBook() {},
    addBookToCart() {},
    // addBookToCart(){},
  },
});

export const {rateBook, addBookToCart} = booksSlice.actions;

export default booksSlice.reducer;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('/api/books');
  // console.log('response');
  console.log(response.data);
  return response.data;
});
