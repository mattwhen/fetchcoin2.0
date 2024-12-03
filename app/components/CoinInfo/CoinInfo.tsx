import Image from "next/image";
import {
	percentageChange,
	renderNumberFormatting,
	roundNum,
} from "../../helpers/helperFunctions";
import "./module.CoinInfo.css";
import "./types";
import { CoinDetails } from "./types";
import { numberWithCommas } from "../../helpers/helperFunctions";
import Nav from "../Nav/Nav";

// Rendered when
export default function CoinInfo(
	{ coinData }: { coinData: CoinDetails },
	coinId: string
) {
	return (
		<>
			<Nav />
			<div className="coin-container">
				<div className="left-panel coin-info">
					<div className="coin-header flex items-center justify-center mb-3">
						<div className="name-header flex items-center justify-center">
							<Image
								id="coin-icon"
								src={coinData?.icon}
								alt={`${coinId} icon`}
								width={250}
								height={250}
							/>
							<div>
								<p className="text-xl mx-3">{coinData?.name}</p>
							</div>
							<div>
								<p className="mx-3 text-xl">{coinData?.symbol}</p>
							</div>
							<div>
								<p className="mx-3 text-lg">Rank: {coinData?.rank}</p>
							</div>
						</div>
					</div>
					<div className="coin-price flex items-center mb-3">
						<p className="font-bold text-4xl">{roundNum(coinData?.price)}</p>
						<div className="flex flex-col items-center justify-center">
							<p className={percentageChange(coinData?.priceChange1d)}>
								{coinData?.priceChange1d + "%"}
							</p>
						</div>
					</div>
					<table className="w-full">
						<tr className="flex justify-between">
							<th>Volume</th>
							<td>{renderNumberFormatting(coinData?.volume.toFixed(0))}</td>
						</tr>
						<tr className="flex justify-between">
							<th>Market Cap</th>
							<td>{renderNumberFormatting(coinData?.marketCap.toFixed(0))}</td>
						</tr>
						<tr className="flex justify-between">
							<th>Available Supply</th>
							<td>
								{renderNumberFormatting(coinData?.availableSupply.toFixed(0))}
							</td>
						</tr>
						<tr className="flex justify-between">
							<th>Total Supply</th>
							<td>
								{renderNumberFormatting(coinData?.totalSupply.toFixed(0))}
							</td>
						</tr>
					</table>
				</div>
				<div className="center-panel"></div>
			</div>
		</>
	);
}
