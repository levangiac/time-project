// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL } from '~constants/index';

// export const userServices = createApi({
//   reducerPath: 'userServices',
//   refetchOnMountOrArgChange: true,
//   refetchOnFocus: true,
//   refetchOnReconnect: true,
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${BASE_URL}/api/v1/`,
//     prepareHeaders: async (headers, { getState }) => {
//       const token = await getToken();
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   //   endpoints: (builder) => ({
//   //     checkNickNameUser: builder.mutation<string, Partial<{ nickname: string }>>({
//   //       query(body) {
//   //         return {
//   //           url: 'user/check_nickname',
//   //           method: 'POST',
//   //           body: body,
//   //         };
//   //       },
//   //       transformResponse: (response: { results: { object: string } }) => {
//   //         return response.results.object;
//   //       },
//   //     }),
//   //     editUserInfo: builder.mutation<UserProps, Partial<UserProps>>({
//   //       query(body) {
//   //         return {
//   //           url: 'user/',
//   //           method: 'PUT',
//   //           body: body,
//   //         };
//   //       },
//   //       transformResponse: (response: { results: { object: UserProps } }) => {
//   //         return response.results.object;
//   //       },
//   //     }),
//   //     deleteUser: builder.mutation<UserProps, Partial<{ id: string }>>({
//   //       query({ id }) {
//   //         return {
//   //           url: `user`,
//   //           method: 'DELETE',
//   //         };
//   //       },
//   //       transformResponse: (response: { results: { object: UserProps } }) => {
//   //         return response.results.object;
//   //       },
//   //     }),
//   //     syncGoogleCalendar: builder.mutation<string, Partial<{}>>({
//   //       query(body) {
//   //         return {
//   //           url: 'google_calendar/get_event_calendar',
//   //           method: 'GET',
//   //         };
//   //       },
//   //       transformResponse: (response: { results: { object: string } }) => {
//   //         return response.results.object;
//   //       },
//   //     }),
//   //     syncNaverCalendar: builder.mutation<string, Partial<{}>>({
//   //       query(body) {
//   //         return {
//   //           url: 'naver_calendar/get_event_calendar',
//   //           method: 'GET',
//   //         };
//   //       },
//   //       transformResponse: (response: { results: { object: string } }) => {
//   //         return response.results.object;
//   //       },
//   //     }),
//   //     getProductPurchase: builder.mutation<any[], Partial<{}>>({
//   //       query(body) {
//   //         return {
//   //           url: 'pack?fields=["$all"]&order=[["price","asc"]]',
//   //           method: 'GET',
//   //         };
//   //       },
//   //       transformResponse: (response: { results: { objects: { rows: any[] } } }) => {
//   //         return response.results.objects?.rows;
//   //       },
//   //     }),
//   //     validatePurchase: builder.mutation<string, Partial<{ [x: string]: any }>>({
//   //       query(body) {
//   //         return {
//   //           url: 'user/purchase/payment',
//   //           method: 'POST',
//   //           body,
//   //         };
//   //       },
//   //       transformResponse: (response: { results: { object: string } }) => {
//   //         console.log(response.results.object);
//   //         return response.results.object;
//   //       },
//   //     }),
//   //   }),
// });

// export const {
//   //   useCheckNickNameUserMutation,
//   //   useEditUserInfoMutation,
//   //   useDeleteUserMutation,
//   //   useSyncGoogleCalendarMutation,
//   //   useSyncNaverCalendarMutation,
//   //   useValidatePurchaseMutation,
//   //   useGetProductPurchaseMutation,
// } = userServices;
