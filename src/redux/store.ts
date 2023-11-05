import { configureStore } from '@reduxjs/toolkit';
import { activeTabReducer } from './slices';

const store = configureStore({
  reducer: {
    tabs: activeTabReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
