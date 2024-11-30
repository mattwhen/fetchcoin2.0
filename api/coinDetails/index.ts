import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CoinDetails } from "./types.ts";

export const coinDetailsApi = createApi({
    reducerPath: 'coinDetailsApi',
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
        getCoinDetails: builder.query<CoinDetails, string>({
            query: (coinId) => `coins/bitcoin`
        })
    }),
  })

export const { useGetCoinDetailsQuery } = coinDetailsApi; 