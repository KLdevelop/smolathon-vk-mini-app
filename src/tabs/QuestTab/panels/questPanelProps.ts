import { QuestPanelID } from '../../../navigation/questPanelIDs';

export interface QuestPanelProps {
  id: QuestPanelID;
  setActivePanel?: (id: QuestPanelID) => void;
}
