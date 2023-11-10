import { Button, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import './AboutQuestPanel.scss';
import { StickyFooter, TabHeader } from '@/components';
import { QuestsPanelProps } from '../questsPanelProps';
import { AboutContent, RouteContent } from '..';
import { useActiveVkuiLocation, useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useGetQuestByIdQuery } from '@/api';
import { useAppDispatch } from '@/hooks';
import { setActiveQuest } from '@/redux/slices';

// const contentStyles = {
//   paddingTop: 110,
//   paddingBottom: 60,
// };

export const AboutQuestPanel = ({ id }: QuestsPanelProps) => {
  const { tab: activeTabId } = useActiveVkuiLocation();
  const navigator = useRouteNavigator();
  const { questId } = useParams<'questId'>() as { questId?: string };
  const tabs = [
    {
      tabId: 'about',
      title: 'О квесте',
      route: `/about_quest/${questId}`,
    },
    {
      tabId: 'route',
      title: 'Маршрут',
      route: `/about_quest/${questId}/route`,
    },
  ];
  const { data: questDataResponse } = useGetQuestByIdQuery(questId ?? '');
  const questData = questDataResponse?.result || null;
  const dispatch = useAppDispatch();
  const onStartQuestClick = () => {
    dispatch(setActiveQuest(questData));
    navigator.push('/quest');
  };

  return (
    <Panel nav={id}>
      {/* <FixedLayout vertical="top" filled> */}
      <PanelHeader before={<PanelHeaderBack onClick={() => navigator.back()} />} separator={false} />
      <TabHeader activeTabId={activeTabId ?? 'new'} tabs={tabs} />
      {/* </FixedLayout> */}
      {questData &&
        (activeTabId === 'about' ? <AboutContent questData={questData} /> : <RouteContent questData={questData} />)}
      <StickyFooter>
        <Button stretched size="l" onClick={onStartQuestClick}>
          Начать квест
        </Button>
      </StickyFooter>
    </Panel>
  );
};
