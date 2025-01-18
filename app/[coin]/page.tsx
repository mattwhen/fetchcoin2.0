"use client";
import React, { useEffect, useState } from "react";
import { fetchCoinDetails } from "@/api/coinDetails";
import Loading from "../components/Loading/Loading";
import "./types";
import CoinInfoContainer from "../components/CoinInfoContainer/CoinInfoContainer";
import Nav from "../components/Nav/Nav";
import { Provider } from "react-redux";
import { store } from "../stores/store";
import { useGetCoinDetailsQuery } from "@/api/coinAll";

type ParamsProps = {
	params: {
		coin: Promise<CoinDetails>;
	};
};

type CoinDetails = {
    id: string,
    icon: string,
    name: string,
    symbol: string,
    rank: number,
    price: number,
    volume: number,
    marketCap: number, 
    availableSupply: number,
    priceChange1d: number,
    priceChange1h: number,
    priceChange1w: number,
    totalSupply: number,
};

const Page = ({ params }: ParamsProps) => {
	// const { data, error, isLoading} = useGetCoinDetailsQuery({params});
	const [coinData, setCoinData] = useState<CoinDetails | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getCoinDetails = await fetchCoinDetails(params.coin);
				console.log("Params: ", params.coin);
				// console.log("coinData: ", data);
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
				<CoinInfoContainer coinData={coinData} />
			) : (
				<div className="flex justify-center items-center">
					<Loading />
				</div>
			)}
		</Provider>
	);
};

export default Page;
