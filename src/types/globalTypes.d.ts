interface ApiResponse<T> {
  description?: string;
  error_code?: number;
  ok?: boolean;
  result: T;
}

type Size = 'm' | 'o' | 'x';

interface SizeData {
  size: string;
  url: string;
}

type Sizes = Record<Size, SizeData>;

interface Preview {
  sizes: Sizes;
}

interface QuestData {
  description: string;
  duration: number;
  id: string;
  name: string;
  preview: Preview;
  reward: number;
  settlement_id: string;
  type: string;
}

interface Settlement {
  id: string;
  name: string;
}
