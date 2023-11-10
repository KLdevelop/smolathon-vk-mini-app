import { configureStore } from '@reduxjs/toolkit';
import { activeModalReducer, attractionModalReducer, selectedCityReducer } from './slices';
import { questsApi } from '@/api';
import { settlementsApi } from '@/api/settlementsApi';

const store = configureStore({
  reducer: {
    modal: activeModalReducer,
    city: selectedCityReducer,
    attractionModal: attractionModalReducer,
    [questsApi.reducerPath]: questsApi.reducer,
    [settlementsApi.reducerPath]: settlementsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questsApi.middleware).concat(settlementsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
