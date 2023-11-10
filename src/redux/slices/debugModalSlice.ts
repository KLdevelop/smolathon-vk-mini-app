import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DebugData {
  coordinates: [number, number];
}

interface InitialState {
  debugData: DebugData | null;
}

const initialState: InitialState = {
  debugData: null,
};

const debugModalSlice = createSlice({
  name: 'debugModal',
  initialState,
  reducers: {
    setDebugData: (state, { payload: debugData }: PayloadAction<DebugData>) => ({
      ...state,
      debugData,
    }),
  },
});

export const { setDebugData } = debugModalSlice.actions;
export const debugModalReducer = debugModalSlice.reducer;
