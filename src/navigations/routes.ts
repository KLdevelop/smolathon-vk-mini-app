import { Tabs } from './tabs';
import { QuestPanelIDs } from './questPanelIDs';
import { QuestsPanelIDs } from './questsPanelIDs';

export const root = 'app-root';

// export const routes = RoutesConfig.create([
//   createRoot(root, [
//     createView(Tabs.QuestsTab, [
//       createPanel(QuestsPanelIDs.Quests, '/'),
//       createPanel(QuestsPanelIDs.AboutQuest, 'about'),
//     ]),
//     createView(Tabs.QuestTab, [createPanel(QuestPanelIDs.Empty, '/')]),
//   ]),
// ]);

export const routes = [
  {
    path: '/',
    view: Tabs.QuestsTab,
    panel: QuestsPanelIDs.Quests,
    tab: 'new',
  },
  {
    path: '/active_quests',
    view: Tabs.QuestsTab,
    panel: QuestsPanelIDs.Quests,
    tab: 'active',
  },
  {
    path: '/about_quest',
    view: Tabs.QuestsTab,
    panel: QuestsPanelIDs.AboutQuest,
    tab: 'about',
  },
  {
    path: '/about_quest/route',
    view: Tabs.QuestsTab,
    panel: QuestsPanelIDs.AboutQuest,
    tab: 'route',
  },
  {
    path: '/market',
    view: Tabs.MarketTab,
    panel: 'main',
  },
  {
    path: '/quest',
    view: Tabs.QuestTab,
    panel: QuestPanelIDs.Empty,
  },
  {
    path: '/wiki',
    view: Tabs.WikiTab,
    panel: 'main',
  },
  {
    path: '/achievements',
    view: Tabs.AchievementsTab,
    panel: 'main',
  },
];
