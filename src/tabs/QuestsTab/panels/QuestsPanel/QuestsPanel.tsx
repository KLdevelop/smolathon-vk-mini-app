import { Button, Div, FixedLayout, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import './QuestsPanel.scss';
import { TabHeader } from '@/components';
import { useState } from 'react';
import { QuestsPanelProps } from '../questsPanelProps';
import { QuestsPanelIDs } from '..';
import { Icon16DropdownOutline } from '@vkontakte/icons';

export const QuestsPanel = ({ id, setActivePanel }: QuestsPanelProps) => {
  const tabs = ['Новые', 'Активные'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Panel id={id}>
      <PanelHeader separator={false}>
        <Button after={<Icon16DropdownOutline />} mode="tertiary" size="s" hasHover={false}>
          <Title level="3">Смоленск</Title>
        </Button>
      </PanelHeader>
      {/* <FixedLayout vertical="top" filled> */}
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      {/* </FixedLayout> */}
      <Div>
        <Button onClick={() => setActivePanel && setActivePanel(QuestsPanelIDs.AboutQuest)}>
          Открыть описание квеста
        </Button>
      </Div>
    </Panel>
  );
};
