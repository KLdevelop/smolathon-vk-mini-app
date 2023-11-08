export const QuestsPanelIDs = {
  Quests: 'quests',
  AboutQuest: 'about_quest',
} as const;

export type QuestsPanelID = (typeof QuestsPanelIDs)[keyof typeof QuestsPanelIDs];
