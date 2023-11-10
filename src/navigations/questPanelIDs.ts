export const QuestPanelIDs = {
  Empty: 'empty',
  Quest: 'quest',
} as const;

export type QuestPanelID = (typeof QuestPanelIDs)[keyof typeof QuestPanelIDs];
