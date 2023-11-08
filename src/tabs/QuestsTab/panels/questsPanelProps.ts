import { QuestsPanelID } from '../../../navigation/questsPanelIDs';

export interface QuestsPanelProps {
  id: QuestsPanelID;
  setActivePanel?: (id: QuestsPanelID) => void;
}
