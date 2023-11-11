import { Button, Group, CardGrid, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import { Icon16DropdownOutline } from '@vkontakte/icons';
import { CardContent, ModalIDs } from '@/components';
import { QuestsPanelProps } from '../questsPanelProps';
import './QuestsPanel.scss';
import { useAppSelector, useOpenModal } from '@/hooks';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useGetQuestsListQuery } from '@/api/questsApi';
import { routeTypeToString } from '@/utils';

export const QuestsPanel = ({ id }: QuestsPanelProps) => {
  const { settlement } = useAppSelector((state) => state.city);
  const openCityModal = useOpenModal(ModalIDs.CityModal);
  const navigator = useRouteNavigator();
  const { data: questsResponse } = useGetQuestsListQuery(settlement?.id ?? '');
  const quests = questsResponse?.result ?? [];

  const onAboutTabClick = (questId: string) => {
    navigator.push(`/about_quest/${questId}`);
  };

  return (
    <Panel nav={id} style={{ marginTop: '15px' }}>
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
            {settlement?.name || 'Выбрать город'}
          </Title>
        </Button>
      </PanelHeader>
      <Group>
        <CardGrid size="l" className="questsPanelCardGrid">
          {quests.map((quest) => (
            <CardContent
              onClick={() => onAboutTabClick(quest.id)}
              key={quest.id}
              img={quest.preview.sizes.o.url}
              estimationTime={`~ ${quest.duration} минут`}
              title={quest.name}
              description={quest.description}
              type={routeTypeToString(quest.type)}
              reward={`${quest.reward} смолкоинов`}
            />
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};
