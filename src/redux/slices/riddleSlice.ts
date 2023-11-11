import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  description: string;
}

const initialState: InitialState = {
  description: '',
};

const riddleSlice = createSlice({
  name: 'riddle',
  initialState,
  reducers: {
    setDescription: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      description: payload,
    }),
  },
});

export const riddleActions = riddleSlice.actions;
export const riddleReducer = riddleSlice.reducer;
