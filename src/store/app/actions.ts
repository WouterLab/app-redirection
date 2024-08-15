import { createAction } from '@reduxjs/toolkit';

import { ACTIONS } from './constants';

export const setShowSidebarMenu = createAction<boolean>(
  ACTIONS.SHOW_SIDEBAR_MENU,
);
