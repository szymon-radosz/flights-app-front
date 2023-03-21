import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from './store';

// Type for our state
export interface AuthState {
  authState: {
    token: string;
    email: string;
  };
}

// Initial state
const initialState: AuthState = {
  authState: {
    token: '',
    email: '',
  },
};

// Actual Slice
export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuth(state, action) {
      state.authState = action.payload;
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

export const { setAuth } = auth.actions;

export const selectAuth = (state: AppState) => state.auth.authState;

export default auth.reducer;
