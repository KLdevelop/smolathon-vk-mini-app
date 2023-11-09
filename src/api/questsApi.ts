import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from './apiUrl';

export const questsApi = createApi({
  reducerPath: 'questsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl + '/quests' }),
  endpoints: (builder) => ({
    getQuestsList: builder.query<ApiResponse<QuestData[]>, void>({
      query: (settlement_id) => ({ url: 'list', body: { settlement_id } }),
    }),
    getQuestById: builder.query<ApiResponse<QuestData>, string>({
      query: (id) => ({ url: id }),
    }),
  }),
});

export const { useGetQuestsListQuery } = questsApi;
