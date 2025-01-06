// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import SearchIcon from "@mui/icons-material/Search";
// import "./module.Search.css";

// const Search = ({
// 	filteredData,
// 	setFilteredData,
// 	searchBarValue,
// 	setSearchBarValue,
// 	data,
// 	value,
// }) => {
// 	const [userValue, setUserValue] = useState("");
// 	const [placeholderText, setPlaceholderText] = useState("");
// 	const inputRef = useRef<HTMLInputElement>(null);

// 	type ApiResponse = {
// 		id: string,
// 		marketCap: number,
// 		name: string,
// 		price: number,
// 		rank: number,
// 		icon: string,
// 		symbol: string,
// 		priceChange1d: number,
// 		priceChange1h: number,
// 		totalSupply: number,
// 		volume: number,
// 	}

// 	// Keyboard shortcut to toggle the searchbar.
// 	useEffect(() => {
// 		if (navigator.userAgent.includes("Mac")) {
// 			setPlaceholderText("⌘ K");
// 		} else if (navigator.userAgent.includes("Windows")) {
// 			setPlaceholderText("Ctrl K");
// 		}

// 		window.addEventListener("keydown", handleKeyDown);
// 	}, []);

// 	function handleSuggestions(e: React.ChangeEvent<HTMLInputElement>) {
// 		if (e.target) {
// 			setUserValue(e.target.value);
// 		}

// 		const searchValue = userValue;
// 		console.log("Data", data);

// 		setSearchBarValue(searchValue);
// 		const filter = data.filter((coin: ApiResponse) => {
// 			return (
// 				coin.id.includes(searchBarValue.toLowerCase()) ||
// 				coin.symbol.includes(searchBarValue.toUpperCase())
// 			);
// 		});

// 		setFilteredData(filter);
// 		handleMatches(e);
// 	}

// 	function handleMatches(e: React.ChangeEvent<HTMLInputElement>) {
// 		// TODO: Highlight the user's value's and match it with the suggestions that render.
// 		if(e.target){
// 			console.log(e.target.value);
// 		}
// 	}

// 	const handleKeyDown = (e: KeyboardEvent) => {
// 		// useRef hook will be used to focus on the input field once the keyboard shortcut (CMD + "k") are pressed.
// 		if(inputRef.current) {
// 			if (e.metaKey && e.key === "k") {
// 				inputRef.current?.focus();
// 			}
// 		}
// 	};

// 	return (
// 		<>
// 			<div className="relative flex flex-col items-center justify-center my-4">
// 				<div className="searchContainer flex justify-center items-center relative w-[300px] md:w-[350px] lg:w-[500px] lg:text-large">
// 					<input
// 						ref={inputRef}
// 						className="relative h-12 border-2 border-black rounded-md w-[230px] md:w-full lg:w-full text-sm py-4 px-10 bg-gray-100"
// 						type="text"
// 						value={userValue}
// 						placeholder={`Crypto name or ticker symbol...`}
// 						onChange={handleSuggestions}
// 					/>
// 					<i className="absolute opacity-50 left-10 min-[425px]:left-12 md:left-2">
// 						<SearchIcon />
// 					</i>
// 					<span className="absolute right-5 opacity-30">{placeholderText}</span>
// 				</div>
// 				<div className={value ? "suggestionsContainer" : "hidden"}>
// 					<ul className="suggestions top-96 lg:top-72 hover:cursor-pointer hover:bg-blue-background-hover">
// 						{filteredData?.slice(0, 10).map((coin: ApiResponse) => {
// 							return (
// 								<Link src={`/coin/${coin.id}`} key={coin.id}>
// 									<li className="hover:bg-blue-highlight hover:text-white">
// 										<div className="flex items-center">
// 											<span className="font-bold hover:text-white">
// 												{coin.name.toUpperCase()}
// 											</span>
// 											<span className="ml-4">
// 												<Image
// 													width={30}
// 													height={30}
// 													src={coin.icon}
// 													alt={coin.name}
// 												></Image>
// 											</span>
// 										</div>
// 										<span>{coin.symbol}</span>
// 									</li>
// 								</Link>
// 							);
// 						})}
// 					</ul>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Search;
