import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  step: Step | null;
}

const initialState: InitialState = {
  step: null,
};

const attractionModalSlice = createSlice({
  name: 'attractionModal',
  initialState,
  reducers: {
    setAttractionData: (state, { payload: step }: PayloadAction<Step | null>) => ({
      ...state,
      step,
    }),
  },
});

export const { setAttractionData } = attractionModalSlice.actions;
export const attractionModalReducer = attractionModalSlice.reducer;
