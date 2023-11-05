import { View } from '@vkontakte/vkui';
import './QuestsTab.scss';
import { TabProps } from '../TabProps';
import { AboutQuestPanel, QuestsPanel, QuestsPanelID, QuestsPanelIDs } from './panels';
import { useState } from 'react';

export const QuestsTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useState<QuestsPanelID>(QuestsPanelIDs.Quests);

  return (
    <View id={id} activePanel={activePanel}>
      <QuestsPanel id={QuestsPanelIDs.Quests} setActivePanel={setActivePanel} />
      <AboutQuestPanel id={QuestsPanelIDs.AboutQuest} setActivePanel={setActivePanel} />
    </View>
  );
};
