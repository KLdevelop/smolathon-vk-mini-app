import { QuestPanelID, QuestPanelIDs } from '@/tabs/QuestTab/panels';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  activePanel: QuestPanelID;
}

const initialState: InitialState = {
  activePanel: QuestPanelIDs.Empty,
};

const questTabSlice = createSlice({
  name: 'questTab',
  initialState,
  reducers: {
    setQuestTabActivePanel: (state, { payload }: PayloadAction<QuestPanelID>) => ({
      ...state,
      activePanel: payload,
    }),
  },
});

export const { setQuestTabActivePanel } = questTabSlice.actions;
export const questTabReducer = questTabSlice.reducer;
