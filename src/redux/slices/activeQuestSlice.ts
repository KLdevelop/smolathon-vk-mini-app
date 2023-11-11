import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  activeQuest: QuestData | null;
}

const initialState: InitialState = {
  activeQuest: null,
};

const activeQuestSlice = createSlice({
  name: 'activeQuest',
  initialState,
  reducers: {
    setActiveQuest: (state, { payload: activeQuest }: PayloadAction<QuestData | null>) => ({
      ...state,
      activeQuest,
    }),
  },
});

export const { setActiveQuest } = activeQuestSlice.actions;
export const activeQuestReducer = activeQuestSlice.reducer;
