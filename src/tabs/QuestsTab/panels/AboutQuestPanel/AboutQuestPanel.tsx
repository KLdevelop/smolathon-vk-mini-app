import { Button, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import './AboutQuestPanel.scss';
import { PanelTabSelector, StickyFooter, TabHeader } from '@/components';
import { useState } from 'react';
import { QuestsPanelProps } from '../questsPanelProps';
import { AboutContent, RouteContent } from '..';
import { AboutQuestTab, AboutQuestTabs } from './aboutQuestTabIDs';
import { quests } from '@/data/quests';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

// const contentStyles = {
//   paddingTop: 110,
//   paddingBottom: 60,
// };

export const AboutQuestPanel = ({ id }: QuestsPanelProps) => {
  const tabs: AboutQuestTab[] = Object.values(AboutQuestTabs);
  const [activeTab, setActiveTab] = useState<AboutQuestTab>(AboutQuestTabs.about);
  const navigator = useRouteNavigator();
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
