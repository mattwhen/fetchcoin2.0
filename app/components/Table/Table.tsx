import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetCoinsQuery } from "@/api/apiSlice";
import { ApiResponse } from "@/app/types/coin";
import { useEffect, useState } from "react";
import {
	numberWithCommas,
	percentageChange,
	renderNumberFormatting,
} from "../../helpers/helperFunctions";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import "./Table.css";
import CoinList from "../CoinList/CoinList";

// Define props here
interface TableProps {
	data: number[];
	loading: boolean;
	page: number;
	setPage: number;
	setData: () => void;
}

const Table: React.FunctionComponent<TableProps> = ({
	data,
	loading,
	page,
	setPage,
	setData,
}) => {
	const { data: coin, isError, isLoading } = useGetCoinsQuery({});
	const numOfCoinsPerPage = 20;

	const tableHeaders = [
		{
			id: 0,
			name: "Rank",
		},
		{
			id: 1,
			name: "Name",
		},
		{
			id: 2,
			name: "Price",
		},
		{
			id: 3,
			name: "24 %",
		},
		{
			id: 4,
			name: "Market Cap",
		},
		{
			id: 5,
			name: "Total Supply",
		},
		{
			id: 6,
			name: "Volume",
		},
	];

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <div>Error</div>;
	}

	if (coin) {
		console.log(coin.result);
	}

	return (
		<>
			<div id="crypto" className="my-4">
				<Pagination
					data={data.length}
					page={page}
					setPage={(page) => page}
					numOfCoinsPerPage={numOfCoinsPerPage}
				/>
			</div>
			{/* <------------------------------------ TABLE SECTION ------------------------------> */}
			<div className="flex justify-center my-6">
				<div className="w-11/12 border border-blue-50 rounded-md shadow-md overflow-x-auto">
					<table>
						<thead className="text-md bg-slate-100">
							<tr>
								<th>
									<div className="p-4 font-semibold">Rank</div>
								</th>
								<th>
									<div className="flex p-4 font-semibold">Name</div>
								</th>
								<th>
									<div className="flex justify-start py-4 font-semibold">Price</div>
								</th>
								<th>
									<div className="flex justify-end pl-4 py-4 w-40 font-semibold">
										Market Cap
									</div>
								</th>
								<th>
									<div className="flex justify-end pl-4 py-4 w-40 font-semibold">
										1h %
									</div>
								</th>
								<th>
									<div className="flex justify-end pl-4 py-4 w-40 font-semibold">
										24h %
									</div>
								</th>
								<th>
									<div className="flex justify-end pl-4 py-4 w-40 font-semibold">
										Total Supply
									</div>
								</th>
								<th>
									<div className="flex justify-end px-4 py-4 w-40 font-semibold">
										Volume
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{coin.result?.map((coin: ApiResponse) => (
								<tr key={coin.id}>
									<td>
										<div className="py-2 px-4 text-center">{coin.rank}</div>
									</td>
									<td>
										<div className="flex pl-4 w-[300px]">
											<div className="flex justify-center items-center">
												<div className="mr-3">
													<Image
														src={coin.icon}
														alt={coin.id}
														width={32}
														height={32}
													/>
												</div>
												<div>
													<div className="font-bold">{coin.name}</div>
													<div>{coin.symbol}</div>
												</div>
											</div>
										</div>
									</td>
									<td>
										<div className="pr-4">
											{numberWithCommas(coin.price.toFixed(2))}
										</div>
									</td>
									<td>
										<div className="flex justify-end pl-4">
											{renderNumberFormatting(coin.marketCap)}
										</div>
									</td>
									<td>
										<div className="flex justify-end pl-4 py-4 w-40">
											<span
												// Sets the class depending on whether the price is POSITIVE or NEGATIVE.
												className={percentageChange(coin.priceChange1h)}
											>
												{coin.priceChange1h}%
											</span>
										</div>
									</td>
									<td>
										<div className="flex justify-end pl-4 py-4 w-40">
											<span
												// Sets the class depending on whether the price is POSITIVE or NEGATIVE.
												className={percentageChange(coin.priceChange1d)}
											>
												{coin.priceChange1d}%
											</span>
										</div>
									</td>
									<td>
										<div className="flex justify-end pl-4 py-4 w-40">
											<span className="font-normal">
												{renderNumberFormatting(coin.totalSupply)}
											</span>
										</div>
									</td>
									<td>
										<div className="flex justify-end px-6 py-4 w-40">
											<span className="font-normal">
												{renderNumberFormatting(coin.volume)}
											</span>
										</div>
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
