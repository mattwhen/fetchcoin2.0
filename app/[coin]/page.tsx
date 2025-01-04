"use client";
import React, { useEffect, useState } from "react";
import { fetchCoinDetails } from "@/api/coinDetails";
import CoinInfo from "../components/CoinInfo/CoinInfo";
import Loading from "../components/Loading/Loading";
import { numberWithCommas, percentageChange } from "../helpers/helperFunctions";
import "./types";
import { CoinDetails } from "./types";
import CoinInfoContainer from "../components/CoinInfoContainer/CoinInfoContainer";
import Nav from "../components/Nav/Nav";
import { Provider } from "react-redux";
import { store } from "../stores/store";

type ParamsProps = {
	params: {
		coin: Promise<CoinDetails>
	}
}

const Page = ({ params }: ParamsProps) => {
	const [coinData, setCoinData] = useState<CoinDetails | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getCoinDetails = await fetchCoinDetails(params.coin);

				setCoinData(getCoinDetails);
			} catch (error) {
				throw new Error(
					`An error has occurred trying to display results: ${error}`
				);
			}
		};
		fetchData();
	}, [params.coin]);
	return (
		<Provider store={store}>
			<Nav />
			{coinData ? (
				<CoinInfoContainer coinData={coinData} coinId={coinData.id} />
			) : (
				<div className="flex justify-center items-center">
					<Loading />
				</div>
			)}
		</Provider>
	);
};

export default Page;
