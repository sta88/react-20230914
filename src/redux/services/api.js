import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Review'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants'
      })
    }),
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: 'dishes',
        params: {
          restaurantId
        }
      })
    }),
    getDish: builder.query({
      query: (dishId) => ({
        url: `dish/${dishId}`
      })
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: 'reviews',
        params: {
          restaurantId
        }
      }),
      providesTags: (result, _, restaurantId) =>
        (result || [])
          .map(({ id }) => ({ type: 'Review', id: id }))
          .concat({ type: 'Review', id: restaurantId })
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users',
      })
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, {restaurantId}) => ({ type: 'Review', id: restaurantId })
    })
  })
})

export const { useGetRestaurantsQuery, useGetDishesQuery, useGetDishQuery, useGetReviewsQuery, useGetUsersQuery, useCreateReviewMutation } = api;