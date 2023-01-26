import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),

  tagTypes: ['Blog'],

  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
      providesTags: ['Blog']
    }),

    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ['Blog']
    }),

    addBlog: builder.mutation({
      query: (blog) => ({
        url: '/blogs',
        method: 'POST',
        body: blog,
      }),
      invalidatesTags: ['Blog']
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Blog']
    }),

    editBlog: builder.mutation({
      query: (newData) => ({
        url: `/blogs/${newData.id}`,
        method: 'PATCH',
        body: newData,
      }),
      invalidatesTags: ['Blog']
    }),
  }),
})

export const { useGetBlogsQuery, useGetSingleBlogQuery,
               useAddBlogMutation, useDeleteBlogMutation, 
               useEditBlogMutation } = blogApi;


