import { FixedLayout, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import './AboutQuestPanel.scss';
import { TabHeader } from '@/components';
import { useState } from 'react';
import { QuestsPanelProps } from '../questsPanelProps';
import { QuestsPanelIDs } from '..';

export const AboutQuestPanel = ({ id, setActivePanel }: QuestsPanelProps) => {
  const tabs = ['О квесте', 'Маршрут'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Panel id={id}>
      <FixedLayout vertical="top" filled>
        <PanelHeader
          before={<PanelHeaderBack onClick={() => setActivePanel && setActivePanel(QuestsPanelIDs.Quests)} />}
          separator={false}
        />
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      </FixedLayout>
    </Panel>
  );
};
