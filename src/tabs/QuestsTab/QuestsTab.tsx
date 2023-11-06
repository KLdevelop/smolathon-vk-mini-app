import { View } from '@vkontakte/vkui';
import './QuestsTab.scss';
import { TabProps } from '../TabProps';
import { AboutQuestPanel, QuestsPanel, QuestsPanelIDs } from './panels';
import { useQuestsTabPanel } from '@/hooks';

export const QuestsTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useQuestsTabPanel();

  return (
    <View id={id} activePanel={activePanel}>
      <QuestsPanel id={QuestsPanelIDs.Quests} setActivePanel={setActivePanel} />
      <AboutQuestPanel id={QuestsPanelIDs.AboutQuest} setActivePanel={setActivePanel} />
    </View>
  );
};
