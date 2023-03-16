import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from './store';

// Type for our state
export interface AlertState {
  alertState: {
    show: boolean;
    msg: string;
    type: string;
  };
}

// Initial state
const initialState: AlertState = {
  alertState: {
    show: false,
    msg: '',
    type: '',
  },
};

// Actual Slice
export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alertState = action?.payload;
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

export const { setAlert } = alertSlice.actions;

export const selectAlertState = (state: AppState) => state.alert.alertState;

export default alertSlice.reducer;
