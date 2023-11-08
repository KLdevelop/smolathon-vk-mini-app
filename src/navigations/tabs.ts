export const Tabs = {
  QuestsTab: 'main',
  MarketTab: 'market',
  QuestTab: 'quest',
  WikiTab: 'wiki',
  AchievementsTab: 'achievements',
} as const;

export type Tab = (typeof Tabs)[keyof typeof Tabs];
    