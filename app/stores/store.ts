import { configureStore } from "@reduxjs/toolkit";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { apiSlice } from "@/api/coinAll";
import { chartApi } from "@/api/coinChart";

export const store = configureStore({
	reducer: {
		// Add the generated reducer at a specific top-level slice
		[apiSlice.reducerPath]: apiSlice.reducer,
		[chartApi.reducerPath]: chartApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(apiSlice.middleware) 
			.concat(chartApi.middleware),
});

// Infer the type of `store`
export type RootState = ReturnType<AppStore["getState"]>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppStore = typeof store;
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
