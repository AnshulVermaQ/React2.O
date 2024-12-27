import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from '../authSlice';

const USER_API = "http://localhost:8000/api/user/";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "register",
                method: "POST",
                body: inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "login",
                method: "POST",
                body: inputData
            })
        }),

        loadUser: builder.query({
            query: () => ({
                url: "profile",
                method: "GET"
            })
        }),
        updateUser: builder.mutation({
            query: (formData) => ({
                url: "profile/update",
                method: "PUT",
                body: formData,
                credentials: "include"
            })
        }),


        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            try {
                const result = await queryFulfilled;
                dispatch(userLoggedIn({ user: result.data.user }));
            }
            catch (error) {
                console.log(error);
            }
        }
    }),

})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLoadUserQuery,
    useUpdateUserMutation
} = authApi;