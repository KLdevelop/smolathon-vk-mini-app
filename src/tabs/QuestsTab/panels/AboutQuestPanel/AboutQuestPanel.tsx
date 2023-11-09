import { Button, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import './AboutQuestPanel.scss';
import { PanelTabSelector, StickyFooter, TabHeader } from '@/components';
import { QuestsPanelProps } from '../questsPanelProps';
import { AboutContent, RouteContent } from '..';
import { AboutQuestTab, AboutQuestTabs } from './aboutQuestTabIDs';
import { quests } from '@/data/quests';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

// const contentStyles = {
//   paddingTop: 110,
//   paddingBottom: 60,
// };

export const AboutQuestPanel = ({ id }: QuestsPanelProps) => {
  const tabs: AboutQuestTab[] = Object.values(AboutQuestTabs);
  // const [_, setActiveTab] = useState<AboutQuestTab>(AboutQuestTabs.about);
  const { tab } = useActiveVkuiLocation();
  console.log(tab);
  const navigator = useRouteNavigator();
  const routes = {
    [AboutQuestTabs.about]: '/about_quest',
    [AboutQuestTabs.route]: '/about_quest/route',
  };
  const tabById: Record<string, AboutQuestTab> = {
    ['about']: AboutQuestTabs.about,
    ['route']: AboutQuestTabs.route,
  };
  const activeTab: AboutQuestTab = tabById[tab ?? 'about'] ?? AboutQuestTabs.about;
  const setActiveTab = (tab: AboutQuestTab) => navigator.push(routes[tab]);
  // const setActivePanel = (panel: QuestsPanelID) => {
  //   navigator.push(routes[root][Tabs.QuestsTab][panel]);
  // };

  return (
    <Panel nav={id}>
      {/* <FixedLayout vertical="top" filled> */}
      <PanelHeader before={<PanelHeaderBack onClick={() => navigator.back()} />} separator={false} />
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      {/* </FixedLayout> */}
      <PanelTabSelector
        activeTab={activeTab}
        tabComponents={{
          [AboutQuestTabs.about]: () => <AboutContent questData={quests[0]} />,
          [AboutQuestTabs.route]: () => <RouteContent />,
        }}
      />
      <StickyFooter>
        <Button stretched size="l" onClick={() => navigator.push('/quest')}>
          Начать квест
        </Button>
      </StickyFooter>
    </Panel>
  );
};
