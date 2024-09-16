"use client"

import { ReactDOM } from "react";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import RootLayout from "./layout";
import App from "./App";

const Main = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
};

export default Main;
