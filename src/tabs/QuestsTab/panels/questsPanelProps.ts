import { QuestsPanelID } from '../../../navigations/questsPanelIDs';

export interface QuestsPanelProps {
  id: QuestsPanelID;
  setActivePanel?: (id: QuestsPanelID) => void;
}
