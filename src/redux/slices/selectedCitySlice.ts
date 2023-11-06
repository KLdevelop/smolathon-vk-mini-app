import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  selectedCity: string | null;
}

const initialState: InitialState = {
  selectedCity: null,
};

const selectedCitySlice = createSlice({
  name: 'selectedCity',
  initialState,
  reducers: {
    selectCity: (state, { payload }: PayloadAction<string | null>) => ({
      ...state,
      selectedCity: payload,
    }),
  },
});

export const { selectCity } = selectedCitySlice.actions;
export const selectedCityReducer = selectedCitySlice.reducer;
