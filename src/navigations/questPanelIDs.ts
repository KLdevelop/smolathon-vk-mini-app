export const QuestPanelIDs = {
  Empty: 'empty',
  Quest: 'quest',
  Stage: 'stage',
  Riddle: 'riddle',
  BossFight: 'bossfight',
} as const;

export type QuestPanelID = (typeof QuestPanelIDs)[keyof typeof QuestPanelIDs];
