import { Epic } from '@vkontakte/vkui';
import { AchievementsTab, MarketTab, QuestTab, QuestsTab, WikiTab } from './tabs';
import { AppFooter } from './components';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Tab, Tabs } from './navigations';

interface NavigationProps {
  id?: string;
}

export const Navigation = ({ id }: NavigationProps) => {
  const { view } = useActiveVkuiLocation();
  const activeTab = view ?? Tabs.QuestsTab;

  return (
    <Epic id={id} activeStory={activeTab} tabbar={<AppFooter activeTab={activeTab as Tab} />}>
      <QuestsTab id={Tabs.QuestsTab} />
      <MarketTab id={Tabs.MarketTab} />
      <QuestTab id={Tabs.QuestTab} />
      <WikiTab id={Tabs.WikiTab} />
      <AchievementsTab id={Tabs.AchievementsTab} />
    </Epic>
  );
};
