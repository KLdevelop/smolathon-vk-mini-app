export const QuestPanelIDs = {
  Empty: 'empty',
} as const;

export type QuestPanelID = (typeof QuestPanelIDs)[keyof typeof QuestPanelIDs];
