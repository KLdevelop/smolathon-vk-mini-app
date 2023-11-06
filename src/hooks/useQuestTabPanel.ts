import { QuestPanelID } from '@/tabs/QuestTab/panels';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setQuestTabActivePanel } from '@/redux/slices';

export const useQuestTabPanel = () => {
  const { activePanel } = useAppSelector((state) => state.questTab);
  const dispatch = useAppDispatch();
  const setActivePanel = (questsPanel: QuestPanelID): void => void dispatch(setQuestTabActivePanel(questsPanel));

  return [activePanel, setActivePanel] as const;
};
