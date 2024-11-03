import { configureStore } from "@reduxjs/toolkit";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { apiSlice } from "@/api/apiSlice";
const axios = require("axios");

const initialState = { value: 0 };

// Create our Redux store using configureStore(reducer).
// configureStore() requires that we pass in a reducer argument.
// Since our application can have different features, and each of those features might have it's own reducer function.
// When we call configureStore(reducer), we pass in all of the different reducers in an object.
export const store = configureStore({
	reducer: {
		// Add the generated reducer at a specific top-level slice
		[apiSlice.reducerPath]:apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
})

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
