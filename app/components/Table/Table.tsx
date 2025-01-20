import React from "react";
import a from "next/link";
import Image from "next/image";
import { useGetCoinsQuery } from "@/api/coinAll";
import { useEffect, useState } from "react";
import {
	currencyWithCommas,
	numberWithCommas,
	percentageChange,
	renderNumberFormatting,
} from "../../helpers/helperFunctions";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import "./module.Table.css";
import { useRouter } from "next/navigation";

interface TableProps {
	loading: boolean;
	page: number;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface ApiResponse {
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
}

const Table: React.FunctionComponent<TableProps> = ({ page, setPage }) => {
	const { data: coin, isError, isLoading } = useGetCoinsQuery({});
	const [isNavigating, setIsNavigating] = useState(false);

	const router = useRouter();

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <div>Error</div>;
	}

	const tableHeaders = [
		{
			id: 0,
			name: "Rank",
			className: "ml-4",
		},
		{
			id: 1,
			name: "Name",
			className: "pl-6",
		},
		{
			id: 2,
			name: "Price",
			className: "",
		},
		{
			id: 3,
			name: "24h %",
			className: "justify-end w-[150px]",
		},
		{
			id: 4,
			name: "1h %",
			className: "justify-end w-[150px]",
		},
		{
			id: 5,
			name: "Market Cap",
			className: "justify-end w-[150px]",
		},
		{
			id: 6,
			name: "Total Supply",
			className: "justify-end ml-3 w-[150px]",
		},
		{
			id: 7,
			name: "Volume",
			className: "justify-end  w-[150px]",
		},
	];

	const handleClick = () => {
		if (!isNavigating) {
			setIsNavigating(true);
			router.push(`${coin.id}`);
		}
	};

	return (
		<>
			<div id="crypto" className="my-4">
				<Pagination data={coin.length} page={page} setPage={setPage} />
			</div>
			{/* <------------------------------------ TABLE SECTION ------------------------------> */}
			<div className="flex justify-center my-6">
				<div className="w-11/12 border border-blue-50 rounded-md shadow-md overflow-x-auto">
					<table className="w-full">
						<thead className="text-md bg-slate-100">
							<tr>
								{tableHeaders.map((header) => (
									<th key={header.id}>
										<div
											className={`flex items-center py-4 font-semibold h-full ${header.className}`}
										>
											<span>{header.name}</span>
										</div>
									</th>
								))}
							</tr>
						</thead>
						<tbody className="bg-white">
							{coin.result
								?.slice(page * 20 - 20, page * 20)
								.map((coin: ApiResponse) => (
									<tr
										key={coin.id}
										className="hover-crypto lg:hover:cursor-pointer"
									>
										{/* Rank */}
										<td>
											<div className="flex justify-center items-center py-2 px-4">
												<a href={`${coin.id}`}>{coin.rank}</a>
											</div>
										</td>
										{/* Name */}
										<td className="table-cell">
											<a
												href={`${coin.id}`}
												onClick={handleClick}
												className={isNavigating ? "disableCursor" : ""}
											>
												<div className="flex pl-4 w-[300px] h-full">
													<div className="flex justify-center items-center">
														<div className="mr-3">
															<Image
																src={coin.icon}
																alt={coin.id}
																width={32}
																height={32}
															/>
														</div>
														{/* Coin details */}
														<div>
															<div className="font-bold">{coin.name}</div>
															<div>{coin.symbol}</div>
														</div>
													</div>
												</div>
											</a>
										</td>
										{/* Price */}
										<td className="table-cell">
											<a
												href={`${coin.id}`}
												onClick={handleClick}
												className={isNavigating ? "disableCursor" : ""}
											>
												<div className="flex items-center justify-start pr-4 w-[150px] h-full">
													<a>{currencyWithCommas(coin.price.toFixed(2))}</a>
												</div>
											</a>
										</td>
										{/* 24 hr % */}
										<td className="table-cell">
											<a
												href={`${coin.id}`}
												onClick={handleClick}
												className={isNavigating ? "disableCursor" : ""}
											>
												<div className="flex items-center justify-end pl-4 py-4 w-[150px] h-full">
													<span
														// Sets the class depending on whether the price is POSITIVE or NEGATIVE.
														className={percentageChange(coin.priceChange1d)}
													>
														{coin.priceChange1h}%
													</span>
												</div>
											</a>
										</td>
										{/* 1 hr % */}
										<td className="table-cell">
											<a
												href={`${coin.id}`}
												onClick={handleClick}
												className={isNavigating ? "disableCursor" : ""}
											>
												<div className="flex items-center justify-end pl-4 py-4 w-[150px] h-full">
													<span
														// Sets the class depending on whether the price is POSITIVE or NEGATIVE.
														className={percentageChange(coin.priceChange1h)}
													>
														{coin.priceChange1d}%
													</span>
												</div>
											</a>
										</td>
										{/* Market Cap */}
										<td className="table-cell">
											<a
												href={`${coin.id}`}
												onClick={handleClick}
												className={isNavigating ? "disableCursor" : ""}
											>
												<div className="flex items-center justify-end w-[150px] pl-4 h-full">
													{renderNumberFormatting(coin.marketCap)}
												</div>
											</a>
										</td>
										{/* Total Supply */}
										<td className="table-cell">
											<a
												href={`${coin.id}`}
												onClick={handleClick}
												className={isNavigating ? "disableCursor" : ""}
											>
												<div className="flex justify-end pl-4 py-4 w-40">
													<span className="font-normal">
														{renderNumberFormatting(coin.totalSupply)}
													</span>
												</div>
											</a>
										</td>
										{/* Volume */}
										<td className="table-cell">
											<a href={`${coin.id}`}>
												<div className="flex justify-end py-4 pr-3 w-40">
													<span className="font-normal">
														{renderNumberFormatting(coin.volume)}
													</span>
												</div>
											</a>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
			{/*  <------------------------------------ END TABLE SECTION ------------------------------> */}
		</>
	);
};

export default Table;
