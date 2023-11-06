import { QuestsPanelID, QuestsPanelIDs } from '@/tabs/QuestsTab/panels';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  activePanel: QuestsPanelID;
}

const initialState: InitialState = {
  activePanel: QuestsPanelIDs.Quests,
};

const questsTabSlice = createSlice({
  name: 'questsTab',
  initialState,
  reducers: {
    setQuestsTabActivePanel: (state, { payload }: PayloadAction<QuestsPanelID>) => ({
      ...state,
      activePanel: payload,
    }),
  },
});

export const { setQuestsTabActivePanel } = questsTabSlice.actions;
export const questsTabReducer = questsTabSlice.reducer;
