import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import './AppFooter.scss';
import {
  Icon28BookSpreadOutline,
  Icon28CupOutline,
  Icon28GameOutline,
  Icon28HomeOutline,
  Icon28MarketOutline,
} from '@vkontakte/icons';
import { Tab, Tabs } from '@/navigations';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

interface Props {
  activeTab: Tab;
}

export const AppFooter = ({ activeTab }: Props) => {
  const navigator = useRouteNavigator();

  return (
    <Tabbar>
      <TabbarItem text="Главная" selected={activeTab === Tabs.QuestsTab} onClick={() => navigator.push('/')}>
        <Icon28HomeOutline />
      </TabbarItem>
      <TabbarItem text="Маркет" selected={activeTab === Tabs.MarketTab} onClick={() => navigator.push('/market')}>
        <Icon28MarketOutline />
      </TabbarItem>
      <TabbarItem text="Квест" selected={activeTab === Tabs.QuestTab} onClick={() => navigator.push('/quest')}>
        <Icon28GameOutline />
      </TabbarItem>
      <TabbarItem text="Вики" selected={activeTab === Tabs.WikiTab} onClick={() => navigator.push('/Wiki')}>
        <Icon28BookSpreadOutline />
      </TabbarItem>
      <TabbarItem
        text="Достижения"
        selected={activeTab === Tabs.AchievementsTab}
        onClick={() => navigator.push('/achievements')}
      >
        <Icon28CupOutline />
      </TabbarItem>
    </Tabbar>
  );
};
