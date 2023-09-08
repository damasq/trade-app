import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  data: {
    id: 1,
    username: 'user',
    offers: [
      {
        id: 1,
        give: 'GIVE-1',
        want: 'WANT-1',
        date: new Date().toString(),
      },
      {
        id: 2,
        give: 'GIVE-2',
        want: 'WANT-2',
        date: new Date().toString(),
      },
    ],
  },
  status: 'idle',
};

// export const fetchProfile = createAsyncThunk('user/fetchProfile', async (id: number, thunkAPI) => {
//   console.log(id);
//   return [];
// });

export const fetchProfile = createAsyncThunk('user/fetchProfile', async (id: number, thunkAPI) => {
  const response = await axios.get(`/api/users/${id}`);
  return response.data;
});

// console.log(3333, fetchProfile);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// export const {rateBook, addBookToCart} = userSlice.actions;

export default userSlice.reducer;
