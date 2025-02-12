import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import "./module.Search.css"
import { useGetCoinDetailsQuery, useGetCoinsQuery } from "@/api/coinAll";

type Props = {
	filteredData: ApiResponse[], // Must always be an array.
	setFilteredData: React.Dispatch<React.SetStateAction<ApiResponse>>,
	searchBarValue: string,
	setSearchBarValue: React.Dispatch<React.SetStateAction<string>>
}

type ApiResponse = {
	id: string;
	marketCap: number;
	name: string;
	price: number;
	rank: number;
	icon: string;
	symbol: string;
	priceChange1d: number;
	priceChange1h: number;
	totalSupply: number;
	volume: number;
};

const Search: React.FC<Props> = ({
	filteredData,
	setFilteredData,
	searchBarValue,
	setSearchBarValue,
}) => {
	const [userValue, setUserValue] = useState("");
	const [showResults, setShowResults] = useState(false);
	const [activeIndex, setActiveIndex] = useState(-1);
	const [isClicked, setIsClicked] = useState(false);

	const wrapperRef = useRef<HTMLInputElement>(null);

	const { data: coin, isLoading } = useGetCoinsQuery({});
	const router = useRouter();
	
	const handleClickOutside = (event: MouseEvent) => {
		// Check if the click is outside the search container
		if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
			setShowResults(false);
		}
	};

	const handleClick = () => {
		if (!isClicked) {
			setIsClicked(true);
			router.push(`${coin.id}`)
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Escape" && wrapperRef.current) {
			wrapperRef.current.blur();
			setActiveIndex(-1);
			setShowResults(false);
		} else if (e.key === "ArrowDown") {
			setActiveIndex((prevIndex) =>
				prevIndex < filteredData.length - 1 ? prevIndex + 1 : 0
			);
		} else if (e.key === "ArrowUp") {
			setActiveIndex((prevIndex) =>
				prevIndex > 0 ? prevIndex - 1 : filteredData.length - 1
			);
		} else if (e.key === "Enter") {
			if(filteredData.length === 0) return;
			if (filteredData[activeIndex].id) {
				setIsClicked(true);
				router.push(filteredData[activeIndex].id);
			}
		}
	};

	useEffect(() => {
		// Event listener for clicks
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const searchValue = e.target.value;

		setUserValue(searchValue);

		if (searchValue.trim() !== "") {
			setShowResults(false);
		}

		setSearchBarValue(searchValue);

		const filter = coin.result.filter((coin: ApiResponse) => {
			return (
				coin.id.includes(searchBarValue.toLowerCase()) ||
				coin.symbol.includes(searchBarValue.toUpperCase())
			);
		});
		setFilteredData(filter);
		setShowResults(true);
	}

	if (isLoading) {
		return null;
	}

	return (
		<>
			<div className="relative flex flex-col items-center justify-center my-4">
				<div ref={wrapperRef} className="searchContainer flex justify-center items-center relative w-[300px] md:w-[350px] lg:w-[500px] lg:text-large">
					<input
						className="relative h-12 border-2 border-black rounded-md w-[230px] md:w-full lg:w-full text-sm py-4 px-10 bg-gray-100"
						type="text"
						value={userValue}
						placeholder={`Crypto name or ticker symbol...`}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
					/>
					<i className="absolute opacity-50 left-10 min-[425px]:left-12 md:left-2">
						<SearchIcon />
					</i>
					{/* <span className="absolute right-5 opacity-30">{placeholderText}</span> */}
				{showResults ? (
					<div className={wrapperRef ? "suggestionsContainer" : "hidden"}>
						<ul className="suggestions top-96 lg:top-72 hover:cursor-pointer hover:bg-blue-background-hover">
							{filteredData?.map((coin: ApiResponse, index: number) => {
								return (
									<a onClick={handleClick} href={`${coin.id}`} key={coin.id} className={isClicked ? "disableCursor" : ""}>
										<li className={activeIndex === index ? "selectedSuggestion" : ""}>
											<div className="flex items-center">
												<span className="font-bold hover:text-white">
													{coin.name.toUpperCase()}
												</span>
												<span className="ml-4">
													<Image
														width={30}
														height={30}
														src={coin.icon}
														alt={coin.name}
													></Image>
												</span>
											</div>
											<span>{coin.symbol}</span>
										</li>
									</a>
								);
							})}
						</ul>
					</div>
				) : null}
				</div>
			</div>
		</>
	);
};

export default Search;
