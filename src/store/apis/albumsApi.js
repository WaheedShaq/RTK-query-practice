import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// whenever we create an api a slice is created automatically (keep that in mind)

const albumsApi = createApi({
  reducerPath: 'albums', // if you need to look for your state in the store, look for this key 'albums'
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: 'albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
