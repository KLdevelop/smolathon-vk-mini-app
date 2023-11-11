import { View } from '@vkontakte/vkui';
import { TabProps } from '../TabProps';
import './QuestTab.scss';
import { EmptyPanel, QuestPanelID, QuestPanelIDs, QuestPanel } from './panels';
import { useAppSelector } from '@/hooks';
import { useEffect, useState } from 'react';
import { QuestStagePanel } from './panels/QuestStagePanel';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { RiddlePanel } from './panels/RIddlePanel';
import { BossFightPanel } from './panels/BossFightPanel';
import { useGetQuestByIdQuery, useGetQuestsListQuery } from '@/api';
import { CompletePanel } from './panels/CompletePanel';

export const QuestTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useState<QuestPanelID>(QuestPanelIDs.Quest);
  // const { activeQuest } = useAppSelector((state) => state.activeQuest);
  const { panel } = useActiveVkuiLocation();
  const { settlement } = useAppSelector((state) => state.city);
  const { data: questsResponse } = useGetQuestsListQuery(settlement?.id ?? '');
  const questsData = questsResponse?.result;
  const quest = questsData && questsData.find((q) => q.is_active);
  const { data: questResponse } = useGetQuestByIdQuery(quest?.id ?? '');
  const activeQuest = questResponse?.result;

  useEffect(() => {
    if (!activeQuest) setActivePanel(QuestPanelIDs.Empty);
  }, [activeQuest]);

  return (
    <View nav={id} activePanel={panel || (activePanel ?? QuestPanelIDs.Quest)}>
      <EmptyPanel id={QuestPanelIDs.Empty} />
      <QuestPanel id={QuestPanelIDs.Quest} activeQuest={activeQuest!} />
      <QuestStagePanel id={QuestPanelIDs.Stage} />
      <RiddlePanel id={QuestPanelIDs.Riddle} />
      <BossFightPanel id={QuestPanelIDs.BossFight} />
      <CompletePanel id={QuestPanelIDs.Complete} />
    </View>
  );
};
