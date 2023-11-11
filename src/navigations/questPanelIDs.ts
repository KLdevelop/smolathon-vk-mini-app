export const QuestPanelIDs = {
  Empty: 'empty',
  Quest: 'quest',
  Stage: 'stage',
} as const;

export type QuestPanelID = (typeof QuestPanelIDs)[keyof typeof QuestPanelIDs];
