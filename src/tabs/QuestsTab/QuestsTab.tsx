import { useState } from 'react';
import { View } from '@vkontakte/vkui';
import { AboutQuestPanel, QuestsPanel, QuestsPanelID, QuestsPanelIDs } from './panels';
import { TabProps } from '../TabProps';
import './QuestsTab.scss';

export const QuestsTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useState<QuestsPanelID>(QuestsPanelIDs.Quests);
  return (
    <View id={id} activePanel={activePanel}>
      <QuestsPanel id={QuestsPanelIDs.Quests} setActivePanel={setActivePanel} />
      <AboutQuestPanel id={QuestsPanelIDs.AboutQuest} setActivePanel={setActivePanel} />
    </View>
  );
};
