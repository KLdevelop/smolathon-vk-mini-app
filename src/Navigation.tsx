import { Epic } from '@vkontakte/vkui';
import { useAppSelector } from './hooks';
import { AchievementsTab, MarketTab, QuestTab, QuestsTab, Tabs, WikiTab } from './tabs';
import { AppFooter } from './components';

export const Navigation = () => {
  const { activeTab } = useAppSelector((state) => state.tabs);

  return (
    <Epic activeStory={activeTab} tabbar={<AppFooter activeTab={activeTab} />}>
      <QuestsTab id={Tabs.QuestsTab} />
      <MarketTab id={Tabs.MarketTab} />
      <QuestTab id={Tabs.QuestTab} />
      <WikiTab id={Tabs.WikiTab} />
      <AchievementsTab id={Tabs.AchievementsTab} />
    </Epic>
  );
};
