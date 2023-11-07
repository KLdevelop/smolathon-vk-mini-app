import { configureStore } from '@reduxjs/toolkit';
import { activeModalReducer, selectedCityReducer } from './slices';

const store = configureStore({
  reducer: {
    modal: activeModalReducer,
    city: selectedCityReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
