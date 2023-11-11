import { Tabs } from './tabs';
import { QuestsPanelIDs } from './questsPanelIDs';
import { QuestPanelIDs } from './questPanelIDs';

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
  },
  {
    path: '/about_quest/:questId',
    view: Tabs.QuestsTab,
    panel: QuestsPanelIDs.AboutQuest,
    tab: 'about',
  },
  {
    path: '/about_quest/:questId/route',
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
    tab: 'route',
  },
  {
    path: '/quest/info',
    view: Tabs.QuestTab,
    tab: 'info',
  },
  {
    path: '/quest/stage',
    view: Tabs.QuestTab,
    panel: QuestPanelIDs.Stage,
  },
  {
    path: '/quest/riddle',
    view: Tabs.QuestTab,
    panel: QuestPanelIDs.Riddle,
  },
  {
    path: '/quest/bossfight',
    view: Tabs.QuestTab,
    panel: QuestPanelIDs.BossFight,
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
