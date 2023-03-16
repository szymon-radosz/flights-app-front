import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from './store';

// Type for our state
export interface LoaderState {
  loaderState: boolean;
}

// Initial state
const initialState: LoaderState = {
  loaderState: false,
};

// Actual Slice
export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader(state, action) {
      state.loaderState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setLoader } = loaderSlice.actions;

export const selectloaderState = (state: AppState) => state.loader.loaderState;

export default loaderSlice.reducer;
