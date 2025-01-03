import React from "react";
import CoinInfo from "../CoinInfo/CoinInfo";
import PriceGraph from "../PriceGraph/PriceGraph";
import "./module.CoinInfoContainer.css";
import "./types";

const CoinInfoContainer: React.FC<CoinDataProps> = ({ coinData, coinId }) => {
	return (
		<div className="coin-container">
			<CoinInfo coinData={coinData} coinId={coinData} />
			<PriceGraph coinId={coinId} />
		</div>
	);
};

export default CoinInfoContainer;
