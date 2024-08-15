import { appReducer } from '.';
import { APP_REDUCER_NAME } from './constants';

type ReducerState = ReturnType<typeof appReducer>;

type State = {
  [APP_REDUCER_NAME]: ReducerState;
};

export const selectShowSidebarMenu = (state: State) =>
  state[APP_REDUCER_NAME].showSidebarMenu;
