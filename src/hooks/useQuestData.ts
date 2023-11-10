import { quests } from '@/data/quests';

export const useQuestData = (id: number) => {
  return quests[id];
};
