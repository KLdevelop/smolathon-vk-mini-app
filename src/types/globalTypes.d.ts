type QuestID = number;

type Quests = Record<QuestID, QuestData>;

type QuestData = {
  id?: QuestID;
  title: string;
  img?: string;
  description?: string;
  type?: string;
  estimationTime?: string;
  reward?: string;
};
