import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types';

type MeState = {
  data: null | User;
};

const initialState: MeState = {
  data: null,
};

const meSlice = createSlice({
  name: 'me',
  initialState: initialState,
  reducers: {
    setMe(state: MeState, action: PayloadAction<{ user: User }>) {
      state.data = action.payload.user;
    },
    singout() {
      // Sign out
    },
  },
});

export const meActions = meSlice.actions;

export default meSlice;
