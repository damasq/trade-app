import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Offer } from '../types'

type OffersState = {
  list: Offer[],
  single: Offer,
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: OffersState = {
  list: [],
  single: {} as Offer,
  status: 'idle',
};

export const fetchOffers = createAsyncThunk<Offer[]>('offers/fetchOffers', async () => {
  const response = await axios.get('/api/offers');
  return response.data;
});

export const fetchOfferById = createAsyncThunk<Offer, number>('offers/fetchOfferById', async (id) => {
  // console.log("log")
  const response = await axios.get(`/api/offers/${id}`);
  return response.data;
});

export const addNewOffer = createAsyncThunk<any, any>('offers/addNewOffer', async (formData) => {
  console.log(formData)
  const response = await axios.post('/api/offers/', { data: Object.fromEntries(formData.entries()) });
  // return response.data;
  return
});


const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    offerDeleted() {

    }
  },

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
