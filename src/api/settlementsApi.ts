import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from './apiUrl';

export const settlementsApi = createApi({
  reducerPath: 'settlementsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl + '/settlements' }),
  endpoints: (builder) => ({
    searchSettlements: builder.query<Settlement[], string>({
      query: (query) => ({ url: 'search', body: { query } }),
      transformResponse(baseQueryReturnValue: ApiResponse<Settlement[]>, meta, arg) {
        if (baseQueryReturnValue.ok) return baseQueryReturnValue.result;
      },
    }),
  }),
});

export const { useSearchSettlementsQuery } = settlementsApi;
