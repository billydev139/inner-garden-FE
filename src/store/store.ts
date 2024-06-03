import { configureStore } from '@reduxjs/toolkit';
import { dummySlice } from './module-name/slice';

const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer // Accessing the reducer property of dummySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
