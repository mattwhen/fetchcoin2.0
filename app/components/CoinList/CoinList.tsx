import { useGetCoinsQuery } from "@/api/apiSlice";
import React from "react";
import { ApiResponse } from "@/app/types/coin";
import Loading from "../Loading/Loading";

const CoinList = () => {
	const { data: coin, isError, isLoading } = useGetCoinsQuery({});

	if (isLoading) {
		return <Loading />
	}

	if (isError) {
		return <div>Error</div>;
	}

	if (coin) {
		console.log('Coin List component', coin.result);
	}

	return (
			<>
				{coin.result?.map((coin: ApiResponse) => {
					return <span key={coin.id}>{coin.name}</span>;
				})}
			</>
		
	);
};

export default CoinList;
