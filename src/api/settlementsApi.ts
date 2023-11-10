import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from './apiUrl';

export const settlementsApi = createApi({
  reducerPath: 'settlementsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl + 'settlements' }),
  endpoints: (builder) => ({
    searchSettlements: builder.query<ApiResponse<Settlement[]>, string>({
      query: (query) => ({ url: `search?query=${query}`, method: 'get' }),
    }),
  }),
});

export const { useSearchSettlementsQuery } = settlementsApi;
