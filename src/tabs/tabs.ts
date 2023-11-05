export const Tabs = {
  QuestsTab: 'quests',
  MarketTab: 'market',
  WikiTab: 'wiki',
  AchievementsTab: 'achievements',
} as const;

export type Tab = (typeof Tabs)[keyof typeof Tabs];
