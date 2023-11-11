import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DebugData {
  coordinates: [number, number];
}

interface InitialState {
  debugData: DebugData | null;
  markers: number[][];
}

const initialState: InitialState = {
  debugData: null,
  markers: [],
};

const debugModalSlice = createSlice({
  name: 'debugModal',
  initialState,
  reducers: {
    setDebugData: (state, { payload: debugData }: PayloadAction<DebugData>) => ({
      ...state,
      debugData,
    }),
    setMarkers: (state, { payload: markers }: PayloadAction<number[][]>) => ({
      ...state,
      markers,
    }),
  },
});

export const { setDebugData, setMarkers } = debugModalSlice.actions;
export const debugModalReducer = debugModalSlice.reducer;
