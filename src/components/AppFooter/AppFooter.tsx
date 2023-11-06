import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import './AppFooter.scss';
import {
  Icon28BookSpreadOutline,
  Icon28CupOutline,
  Icon28GameOutline,
  Icon28HomeOutline,
  Icon28MarketOutline,
} from '@vkontakte/icons';
import { useNavigate } from '@/hooks';
import { Tab, Tabs } from '@/tabs';

interface Props {
  activeTab: Tab;
}

export const AppFooter = ({ activeTab }: Props) => {
  const navigate = useNavigate();

  return (
    <Tabbar>
      <TabbarItem text="Главная" selected={activeTab === Tabs.QuestsTab} onClick={() => navigate(Tabs.QuestsTab)}>
        <Icon28HomeOutline />
      </TabbarItem>
      <TabbarItem text="Маркет" selected={activeTab === Tabs.MarketTab} onClick={() => navigate(Tabs.MarketTab)}>
        <Icon28MarketOutline />
      </TabbarItem>
      <TabbarItem text="Квест" selected={activeTab === Tabs.QuestTab} onClick={() => navigate(Tabs.QuestTab)}>
        <Icon28GameOutline />
      </TabbarItem>
      <TabbarItem text="Вики" selected={activeTab === Tabs.WikiTab} onClick={() => navigate(Tabs.WikiTab)}>
        <Icon28BookSpreadOutline />
      </TabbarItem>
      <TabbarItem
        text="Достижения"
        selected={activeTab === Tabs.AchievementsTab}
        onClick={() => navigate(Tabs.AchievementsTab)}
      >
        <Icon28CupOutline />
      </TabbarItem>
    </Tabbar>
  );
};
