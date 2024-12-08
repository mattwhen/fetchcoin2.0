import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints.
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://openapiv1.coinstats.app/coins?page=1&limit=1000',
        prepareHeaders: (headers) => {
            const apiKey = process.env.NEXT_PUBLIC_APP_KEY;
        
            if (apiKey) {
                headers.set('accept', 'application/json');
                headers.set('X-API-KEY', apiKey);
            }
    
            return headers; 
        } 
    }),
    endpoints: builder => ({
        getCoins: builder.query({
            query: () => ''
        })
    }),
  })

// export hooks for usage in fn components, which are
// auto-generated based on the defined endpoints.
export const { useGetCoinsQuery } = apiSlice;
