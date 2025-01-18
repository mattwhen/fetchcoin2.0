"use client";
import React from "react";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import Table from "./components/Table/Table";
import Mission from "./components/Mission/Mission";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

const App = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState<number>(1);
	const [searchBarValue, setSearchBarValue] = useState("");

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
					loading={loading}
					setLoading={setLoading}
					page={page}
					setPage={setPage}
				/>
				<Mission />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default App;
