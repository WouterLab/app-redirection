import { createReducer } from '@reduxjs/toolkit';

import { setShowSidebarMenu } from './actions';
import { InitialState } from './types';

const initialState: InitialState = {
  showSidebarMenu: false,
};

export const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(setShowSidebarMenu, (state, action) => {
    state.showSidebarMenu = action.payload;
  });
});
