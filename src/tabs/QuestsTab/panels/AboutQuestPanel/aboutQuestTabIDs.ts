export const AboutQuestTabs = {
  about: 'О квесте',
  route: 'Маршрут',
} as const;

export type AboutQuestTab = (typeof AboutQuestTabs)[keyof typeof AboutQuestTabs];
