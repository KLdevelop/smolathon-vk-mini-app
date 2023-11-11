import { configureStore } from '@reduxjs/toolkit';
import {
  activeModalReducer,
  activeQuestReducer,
  attractionModalReducer,
  debugModalReducer,
  riddleReducer,
  riddlesReducer,
  selectedCityReducer,
} from './slices';
import { questsApi } from '@/api';
import { settlementsApi } from '@/api/settlementsApi';
import { riddlesApi } from '@/api/riddlesApi';

const store = configureStore({
  reducer: {
    modal: activeModalReducer,
    city: selectedCityReducer,
    attractionModal: attractionModalReducer,
    activeQuest: activeQuestReducer,
    debugModal: debugModalReducer,
    riddles: riddlesReducer,
    riddle: riddleReducer,
    [questsApi.reducerPath]: questsApi.reducer,
    [settlementsApi.reducerPath]: settlementsApi.reducer,
    [riddlesApi.reducerPath]: riddlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questsApi.middleware).concat(settlementsApi.middleware).concat(riddlesApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
