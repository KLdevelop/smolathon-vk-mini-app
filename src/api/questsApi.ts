import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from './apiUrl';
import { getUserId } from '@/utils';
import axios from 'axios';

const userId = getUserId();

export const questsApi = createApi({
  reducerPath: 'questsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl + 'quests' }),
  endpoints: (builder) => ({
    getQuestsList: builder.query<ApiResponse<QuestData[]>, string>({
      query: (settlement_id) => ({ url: `list?account_id=${userId}&settlement_id=${settlement_id}` }),
    }),
    getQuestById: builder.query<ApiResponse<QuestData>, string>({
      query: (id) => ({ url: `/${userId}/${id}` }),
    }),
  }),
});

export const startQuest = (questId: string) => {
  axios.post(apiUrl + `quests/start/${userId}/${questId}`);
};

export const { useGetQuestsListQuery, useGetQuestByIdQuery } = questsApi;
