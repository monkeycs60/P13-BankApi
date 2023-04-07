import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'userApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => '/user',
        }),
        postUser: builder.mutation({
            query: (body) => ({
                url: '/user',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetUserQuery, usePostUserMutation } = userApiSlice;