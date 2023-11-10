import { View } from '@vkontakte/vkui';
import { TabProps } from '../TabProps';
import './QuestTab.scss';
import { EmptyPanel, QuestPanelID, QuestPanelIDs, QuestPanel } from './panels';
import { useAppSelector } from '@/hooks';
import { useEffect, useState } from 'react';

export const QuestTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useState<QuestPanelID>(QuestPanelIDs.Quest);
  const { activeQuest } = useAppSelector((state) => state.activeQuest);

  useEffect(() => {
    if (!activeQuest) setActivePanel(QuestPanelIDs.Empty);
  }, [activeQuest]);

  return (
    <View nav={id} activePanel={activePanel ?? QuestPanelIDs.Quest}>
      <EmptyPanel id={QuestPanelIDs.Empty} />
      <QuestPanel id={QuestPanelIDs.Quest} activeQuest={activeQuest!} />
    </View>
  );
};
