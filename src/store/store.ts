import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { alert } from './alert';
import { auth } from './auth';
import { loader } from './loader';

const makeStore = () =>
  configureStore({
    reducer: {
      [auth.name]: auth.reducer,
      [loader.name]: loader.reducer,
      [alert.name]: alert.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
