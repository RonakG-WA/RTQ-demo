import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { User } from "../type/User";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:9000/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => ({ url: 'users', method: 'GET' }),
            providesTags: ['User'],
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query: (newUser) => ({
                url: 'users',
                method: 'POST',
                data: newUser,
            }),
            invalidatesTags: ['User'],
        }),
        updateUser: builder.mutation<User, Partial<User>>({
            query: ({ id, ...patch }) => ({
                url: `users/${id}`,
                method: 'PATCH',
                data: patch,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation<{ id: number }, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
    }),

});
export const { useGetUsersQuery , useAddUserMutation , useUpdateUserMutation , useDeleteUserMutation } = userApi;