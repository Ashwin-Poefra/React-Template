import { configureStore } from '@reduxjs/toolkit';
import { Slices, Actions } from './slices';

// create store
export const store = configureStore({
  reducer: Slices,
});

// root state
export type RootState = ReturnType<typeof store.getState>;

// export app dispatch
export type AppDispatch = typeof store.dispatch;

// export app actions
export const AppActions = Actions;
