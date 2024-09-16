import { configureStore } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

const initialState: CounterState = { value: 0 };

interface CounterState {
	value: number;
}

// Create our Redux store using configureStore(reducer).
// configureStore() requires that we pass in a reducer argument.
// Since our application can have different features, and each of those features might have it's own reducer function.
// When we call configureStore(reducer), we pass in all of the different reducers in an object.
export const store = configureStore({
	// Pass in all of our reducers in the reducer object.
	reducer: {
		/* 
    When we pass in an object like {counter: counterReducer}, that says that we want 
    to have a state.counter section of our Redux state object, 
    and that we want the counterReducer function to be in charge of deciding if 
    and how to update the state.counter section whenever an action is dispatched.
    */

	},
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
