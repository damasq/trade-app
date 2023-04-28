import {createSlice} from '@reduxjs/toolkit';

import {IBooksState} from '../types';

const initialState: IBooksState = {
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
};

const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
