import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  list: [
    {
      id: 1,
      give: 'GIVE-1',
      want: 'WANT-1',
      date: new Date().toString(),
      user: {
        id: 1,
        username: 'user',
      },
    },
  ],
  single: {
    id: 1,
    give: 'GIVE-1',
    want: 'WANT-1',
    date: new Date().toString(),
    user: {
      id: 1,
      username: 'user',
    },
  },
  status: 'idle',
};

export const fetchOffers = createAsyncThunk('offer/fetchOffers', async () => {
  const response = await axios.get('/api/offers');
  return response.data;
});

export const fetchOfferById = createAsyncThunk('offer/fetchOfferById', async (id: number, thunkAPI) => {
  const response = await axios.get(`/api/offers/${id}`);
  return response.data;
});

const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchOfferById.fulfilled, (state, action) => {
      state.single = action.payload;
    });
  },
});

// export const {rateBook, addBookToCart} = offerSlice.actions;

export default offerSlice.reducer;
