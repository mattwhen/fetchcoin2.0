import React from "react";
import CoinInfo from "../CoinInfo/CoinInfo";
import PriceGraph from "../PriceGraph/PriceGraph";
import "./module.CoinInfoContainer.css";
import "./types";

type CoinDetails = {
	id: string;
	icon: string;
	name: string;
	symbol: string;
	rank: number;
	price: number;
	volume: number;
	marketCap: number;
	availableSupply: number;
	priceChange1d: number;
	priceChange1h: number;
	priceChange1w: number;
	totalSupply: number;
};

type CoinDetailsProps = {
	coinData: CoinDetails;
};

const CoinInfoContainer: React.FC<CoinDetailsProps> = ({
	coinData,
}) => {
	return (
		<div className="flex flex-col md:coin-container">
			<CoinInfo coinData={coinData} />
			<PriceGraph coinId={coinData.id} />
		</div>
	);
};

export default CoinInfoContainer;
