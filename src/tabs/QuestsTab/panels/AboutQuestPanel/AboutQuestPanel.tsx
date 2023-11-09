import { Button, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import './AboutQuestPanel.scss';
import { StickyFooter, TabHeader } from '@/components';
import { QuestsPanelProps } from '../questsPanelProps';
import { AboutContent, RouteContent } from '..';
import { quests } from '@/data/quests';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

// const contentStyles = {
//   paddingTop: 110,
//   paddingBottom: 60,
// };

export const AboutQuestPanel = ({ id }: QuestsPanelProps) => {
  const { tab: activeTabId } = useActiveVkuiLocation();
  const navigator = useRouteNavigator();
  const tabs = [
    {
      tabId: 'about',
      title: 'О квесте',
      route: '/about_quest',
    },
    {
      tabId: 'route',
      title: 'Маршрут',
      route: '/about_quest/route',
    },
  ];

  return (
    <Panel nav={id}>
      {/* <FixedLayout vertical="top" filled> */}
      <PanelHeader before={<PanelHeaderBack onClick={() => navigator.back()} />} separator={false} />
      <TabHeader activeTabId={activeTabId ?? 'new'} tabs={tabs} />
      {/* </FixedLayout> */}
      {activeTabId === 'about' ? <AboutContent questData={quests[0]} /> : <RouteContent />}
      <StickyFooter>
        <Button stretched size="l" onClick={() => navigator.push('/quest')}>
          Начать квест
        </Button>
      </StickyFooter>
    </Panel>
  );
};
