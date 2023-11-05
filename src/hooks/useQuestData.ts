import { quests } from '@/data/quests';

export const useQuestData = (id: QuestID) => {
  return quests[id];
};
