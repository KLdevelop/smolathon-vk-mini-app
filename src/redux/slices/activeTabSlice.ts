import { Tab, Tabs } from '@/tabs';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  activeTab: Tab;
}

const initialState: InitialState = {
  activeTab: Tabs.QuestsTab,
};

const activeTabSlice = createSlice({
  name: 'activeTab',
  initialState,
  reducers: {
    setActiveTab: (state, { payload }: PayloadAction<Tab>) => ({
      ...state,
      activeTab: payload,
    }),
  },
});

export const { setActiveTab } = activeTabSlice.actions;
export const activeTabReducer = activeTabSlice.reducer;
