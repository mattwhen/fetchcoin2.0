import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chartApi = createApi({
	reducerPath: "chartApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://openapiv1.coinstats.app/coins/",
		prepareHeaders: (headers) => {
			const apiKey = process.env.NEXT_PUBLIC_APP_KEY;

			if (apiKey) {
				headers.set("accept", "application/json");
				headers.set("X-API-KEY", apiKey);
			}

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getChartData: builder.query({
			query: (endpoint) => `${endpoint}/charts?period=1w`,
		}),
	}),
});

export const { useGetChartDataQuery } = chartApi;
