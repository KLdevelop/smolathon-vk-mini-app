interface ApiResponse<T> {
  description: string;
  error_code: number;
  ok: boolean;
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

interface Schedule {
  from_to: string;
  week_day: string;
}

interface Step {
  description?: string;
  address: string;
  email: string;
  id: string;
  images: (Preview | undefined)[];
  latitude: number;
  longitude: number;
  name: string;
  order: number;
  phone: string;
  place_type: string;
  quest_id: string;
  schedule: Schedule[];
  website: string;
}

interface QuestData {
  description: string;
  duration: number;
  id: string;
  name: string;
  preview: Preview;
  reward: number;
  settlement_id: string;
  steps: Step[];
  type: string;
}

interface Settlement {
  id: string;
  name: string;
}
