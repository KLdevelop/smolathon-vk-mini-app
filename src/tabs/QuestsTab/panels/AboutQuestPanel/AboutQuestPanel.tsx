import { Button, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import './AboutQuestPanel.scss';
import { PanelTabSelector, StickyFooter, TabHeader } from '@/components';
import { useState } from 'react';
import { QuestsPanelProps } from '../questsPanelProps';
import { AboutContent, QuestsPanelIDs, RouteContent } from '..';
import { AboutQuestTab, AboutQuestTabs } from './aboutQuestTabIDs';
import { useNavigate } from '@/hooks';
import { Tabs } from '@/tabs/tabs';
import { quests } from '@/data/quests';

// const contentStyles = {
//   paddingTop: 110,
//   paddingBottom: 60,
// };

export const AboutQuestPanel = ({ id, setActivePanel }: QuestsPanelProps) => {
  const tabs: AboutQuestTab[] = Object.values(AboutQuestTabs);
  const [activeTab, setActiveTab] = useState<AboutQuestTab>(AboutQuestTabs.about);
  const navigate = useNavigate();

  return (
    <Panel id={id}>
      {/* <FixedLayout vertical="top" filled> */}
      <PanelHeader
        before={<PanelHeaderBack onClick={() => setActivePanel && setActivePanel(QuestsPanelIDs.Quests)} />}
        separator={false}
      />
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
        <Button stretched size="l" onClick={() => navigate(Tabs.QuestTab)}>
          Начать квест
        </Button>
      </StickyFooter>
    </Panel>
  );
};
