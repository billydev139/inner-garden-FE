import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dummyData: null,
  loading: false,
  error: null,
};

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    fetchDummyStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchDummySuccess: (state, action) => {
      state.loading = false;
      state.dummyData = action.payload;
    },
    fetchDummyFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDummyStart, fetchDummySuccess, fetchDummyFailure } = dummySlice.actions;