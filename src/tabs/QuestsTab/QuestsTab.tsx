import { View } from '@vkontakte/vkui';
import './QuestsTab.scss';
import { TabProps } from '../TabProps';
import { AboutQuestPanel, QuestsPanel, QuestsPanelIDs } from './panels';
import { useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

export const QuestsTab = ({ id }: TabProps) => {
  const activePanel = useGetPanelForView() ?? QuestsPanelIDs.Quests;

  return (
    <View nav={id} activePanel={activePanel}>
      <QuestsPanel id={QuestsPanelIDs.Quests} />
      <AboutQuestPanel id={QuestsPanelIDs.AboutQuest} />
    </View>
  );
};
