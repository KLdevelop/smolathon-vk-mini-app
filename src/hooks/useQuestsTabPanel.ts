import { setQuestsTabActivePanel } from '@/redux/slices';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { QuestsPanelID } from '@/tabs/QuestsTab/panels';

export const useQuestsTabPanel = () => {
  const { activePanel } = useAppSelector((state) => state.questsTab);
  const dispatch = useAppDispatch();
  const setActivePanel = (questsPanel: QuestsPanelID): void => void dispatch(setQuestsTabActivePanel(questsPanel));

  return [activePanel, setActivePanel] as const;
};
