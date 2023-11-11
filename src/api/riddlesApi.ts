import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { apiUrl } from './apiUrl';
import { getUserId } from '@/utils';

const userId = getUserId();

export const riddlesApi = createApi({
  reducerPath: 'riddlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl + 'riddles' }),
  endpoints: (builder) => ({
    getRiddlesList: builder.query<ApiResponse<Riddle[]>, string>({
      query: (id) => ({ url: `/list?account_id=${userId}&quest_step_id=${id}` }),
    }),
  }),
});
