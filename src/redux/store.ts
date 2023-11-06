import { configureStore } from '@reduxjs/toolkit';
import { activeModalReducer, activeTabReducer, selectedCityReducer } from './slices';

const store = configureStore({
  reducer: {
    tabs: activeTabReducer,
    modal: activeModalReducer,
    city: selectedCityReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
