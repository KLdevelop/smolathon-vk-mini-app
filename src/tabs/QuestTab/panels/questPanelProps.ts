import { QuestPanelID } from './questPanelIDs';

export interface QuestPanelProps {
  id: QuestPanelID;
  setActivePanel?: (id: QuestPanelID) => void;
}
