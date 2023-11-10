import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SelectedCityState {
  settlement: Settlement | null;
}

const initialState: SelectedCityState = {
  settlement: null,
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
