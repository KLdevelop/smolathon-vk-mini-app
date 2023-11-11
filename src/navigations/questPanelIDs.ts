export const QuestPanelIDs = {
  Empty: 'empty',
  Quest: 'quest',
  Stage: 'stage',
  Riddle: 'riddle',
  BossFight: 'bossfight',
  Complete: 'complete',
} as const;

export type QuestPanelID = (typeof QuestPanelIDs)[keyof typeof QuestPanelIDs];
