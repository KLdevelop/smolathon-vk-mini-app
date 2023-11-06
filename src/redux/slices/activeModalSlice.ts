import { ModalID } from '@/components';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  activeModal: ModalID | null;
}

const initialState: InitialState = {
  activeModal: null,
};

const activeModalSlice = createSlice({
  name: 'activeModal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<ModalID>) => ({
      ...state,
      activeModal: payload,
    }),
    closeModal: (state) => ({
      ...state,
      activeModal: null,
    }),
  },
});

export const { openModal, closeModal } = activeModalSlice.actions;
export const activeModalReducer = activeModalSlice.reducer;
