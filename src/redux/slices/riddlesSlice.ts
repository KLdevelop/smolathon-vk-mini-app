import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  activeRiddle: Riddle | null;
}

const initialState: InitialState = {
  activeRiddle: null,
};

const riddlesSlice = createSlice({
  name: 'riddles',
  initialState,
  reducers: {
    setActiveRiddle: (state, { payload: activeRiddle }: PayloadAction<Riddle | null>) => ({
      ...state,
      activeRiddle,
    }),
  },
});

export const { setActiveRiddle } = riddlesSlice.actions;
export const riddlesReducer = riddlesSlice.reducer;
