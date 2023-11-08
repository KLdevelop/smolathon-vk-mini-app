import { QuestPanelID } from '../../../navigations/questPanelIDs';

export interface QuestPanelProps {
  id: QuestPanelID;
  setActivePanel?: (id: QuestPanelID) => void;
}
