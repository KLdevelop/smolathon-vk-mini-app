import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SelectedCityState {
  settlement: Settlement | null;
}

const initialState: SelectedCityState = {
  settlement: {
    id: 'f218690b-4948-4217-8c76-7a433f533f42',
    name: 'Смоленск',
  },
};

const selectedCitySlice = createSlice({
  name: 'selectedCity',
  initialState,
  reducers: {
    selectCity: (state, { payload: settlement }: PayloadAction<SelectedCityState['settlement']>) => ({
      ...state,
      settlement,
    }),
  },
});

export const { selectCity } = selectedCitySlice.actions;
export const selectedCityReducer = selectedCitySlice.reducer;
