import { useState } from 'react';
import { Button, Div, Group, CardGrid, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import { Icon16DropdownOutline } from '@vkontakte/icons';
import { TabHeader, CardContent } from '@/components';
import { QuestsPanelProps } from '../questsPanelProps';
import { quests } from '@/data/quests';
import './QuestsPanel.scss';
import { QuestsPanelIDs } from '../questsPanelIDs';

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
        <Group>
          <CardGrid size="l">
            {quests.map((i, ind) => (
              <CardContent
                onClick={() => setActivePanel && setActivePanel(QuestsPanelIDs.AboutQuest)}
                key={ind}
                img={i.img}
                estimationTime={i.estimationTime}
                title={i.title}
                description={i.description}
                type={i.type}
                reward={i.reward}
              />
            ))}
          </CardGrid>
        </Group>
      </Div>
    </Panel>
  );
};
