import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { APP_REDUCER_NAME, appReducer } from './app';

export const store = configureStore({
  reducer: combineReducers({
    [APP_REDUCER_NAME]: appReducer,
  }),
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './app';
