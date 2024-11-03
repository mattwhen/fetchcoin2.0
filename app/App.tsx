"use client";
import React from "react";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import Mission from "./components/Mission/Mission";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PostsList from "./components/CoinList/CoinList";

const App = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [searchBarValue, setSearchBarValue] = useState("");

	const apiKey = process.env.REACT_APP_KEY;
	const url = `https://openapiv1.coinstats.app/coins?page=1&limit=1000`;

	return (
		<>
			<Nav />
			<div className="px-3">

			<Intro />
			<Search
				value={searchBarValue}
				setFilteredData={setFilteredData}
				filteredData={filteredData}
				searchBarValue={searchBarValue}
				setSearchBarValue={setSearchBarValue}
				data={data}
				/>
			<Table
				data={data}
				setData={setData}
				loading={loading}
				setLoading={setLoading}
				page={page}
				// setPage={setPage}
				/>
			<Mission />
			<Contact />
			<Footer />
				</div>
		</>
	);
};

export default App;
