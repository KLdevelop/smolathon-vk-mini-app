import { View } from '@vkontakte/vkui';
import { TabProps } from '../TabProps';
import './QuestTab.scss';
import { EmptyPanel, QuestPanelID, QuestPanelIDs, QuestPanel } from './panels';
import { useAppSelector } from '@/hooks';
import { useEffect, useState } from 'react';
import { QuestStagePanel } from './panels/QuestStagePanel';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { RiddlePanel } from './panels/RIddlePanel';

export const QuestTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useState<QuestPanelID>(QuestPanelIDs.Quest);
  const { activeQuest } = useAppSelector((state) => state.activeQuest);
  const { panel } = useActiveVkuiLocation();

  useEffect(() => {
    if (!activeQuest) setActivePanel(QuestPanelIDs.Empty);
  }, [activeQuest]);

  return (
    <View nav={id} activePanel={panel || (activePanel ?? QuestPanelIDs.Quest)}>
      <EmptyPanel id={QuestPanelIDs.Empty} />
      <QuestPanel id={QuestPanelIDs.Quest} activeQuest={activeQuest!} />
      <QuestStagePanel id={QuestPanelIDs.Stage} />
      <RiddlePanel id={QuestPanelIDs.Riddle} />
    </View>
  );
};
