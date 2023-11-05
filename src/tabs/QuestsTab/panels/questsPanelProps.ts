import { QuestsPanelID } from './questsPanelIDs';

export interface QuestsPanelProps {
  id: QuestsPanelID;
  setActivePanel?: (id: QuestsPanelID) => void;
}
