import { useState } from 'react';
import { Button, Group, CardGrid, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import { Icon16DropdownOutline } from '@vkontakte/icons';
import { TabHeader, CardContent, ModalIDs } from '@/components';
import { QuestsPanelProps } from '../questsPanelProps';
import { quests } from '@/data/quests';
import './QuestsPanel.scss';
import { QuestsPanelID, QuestsPanelIDs } from '@/navigations';
import { useAppSelector, useOpenModal } from '@/hooks';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useGetQuestsListQuery } from '@/api/questsApi';

export const QuestsPanel = ({ id }: QuestsPanelProps) => {
  const tabs = ['Новые', 'Активные'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { selectedCity } = useAppSelector((state) => state.city);
  const openCityModal = useOpenModal(ModalIDs.CityModal);
  const navigator = useRouteNavigator();
  const setActivePanel = (panel: QuestsPanelID) => {
    navigator.push(`/${panel}`);
  };
  const s = useGetQuestsListQuery();
  console.log(s);

  return (
    <Panel nav={id}>
      <PanelHeader separator={false}>
        <Button
          appearance="neutral"
          after={<Icon16DropdownOutline style={{ color: 'var(--vkui--color_text_accent_themed)' }} />}
          mode="tertiary"
          size="s"
          hasHover={false}
          onClick={openCityModal}
        >
          <Title level="1" normalize>
            {selectedCity || 'Выбрать город'}
          </Title>
        </Button>
      </PanelHeader>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <Group>
        <CardGrid size="l" className="questsPanelCardGrid">
          {quests.map((quest) => (
            <CardContent
              onClick={() => setActivePanel(QuestsPanelIDs.AboutQuest)}
              key={quest.id}
              img={quest.img}
              estimationTime={quest.estimationTime}
              title={quest.title}
              description={quest.description}
              type={quest.type}
              reward={quest.reward}
            />
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};
