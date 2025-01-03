import Image from "next/image";
import { percentageChange, roundNum } from "../../helpers/helperFunctions";
import "./module.CoinInfo.css";
import "./types";
import { CoinDetails } from "./types";
import { numberWithCommas } from "../../helpers/helperFunctions";

export default function CoinInfo(
	{ coinData }: { coinData: CoinDetails },
	coinId: string
) {
	return (
		<>
				<div className="left-panel-container">
					<div className="left-panel">
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
									<p className="mx-3 text-xl font-light ">{coinData?.symbol}</p>
								</div>
								<div>
									<p className="mx-3 text-lg text-light">
										Rank: {coinData?.rank}
									</p>
								</div>
							</div>
						</div>
						<div className="coin-price flex items-center mb-3">
							<p className="font-bold text-4xl">{roundNum(coinData?.price)}</p>
							<div className="flex flex-col items-center justify-center ml-4">
								<p className={percentageChange(coinData?.priceChange1d)}>
									{coinData?.priceChange1d + "%"}
								</p>
							</div>
						</div>
						<table className="w-full">
							<thead>
								<tr className="table-border flex justify-between ">
									<th>Volume</th>
									<td>{numberWithCommas(coinData?.volume.toFixed(0))}</td>
								</tr>
								<tr className="table-border flex justify-between">
									<th>Market Cap</th>
									<td>{numberWithCommas(coinData?.marketCap.toFixed(0))}</td>
								</tr>
								<tr className="table-border flex justify-between">
									<th>Available Supply</th>
									<td>
										{numberWithCommas(coinData?.availableSupply.toFixed(0))}
									</td>
								</tr>
								<tr className="table-border flex justify-between">
									<th>Total Supply</th>
									<td>{numberWithCommas(coinData?.totalSupply.toFixed(0))}</td>
								</tr>
							</thead>
						</table>
					</div>
					<div className="left-panel">
						<table className="w-full">
							<tbody>
							<tr className="table-border flex justify-between items-center">
								<th>Price 1h</th>
								<td className={percentageChange(coinData?.priceChange1h)}>
									{coinData?.priceChange1h + "%"}
								</td>
							</tr>
							<tr className="table-border flex justify-between items-center">
								<th>Price 24h</th>
								<td className={percentageChange(coinData?.priceChange1d)}>
									{coinData?.priceChange1d + "%"}
								</td>
							</tr>
							<tr className="table-border flex justify-between items-center">
								<th>Price 1w</th>
								<td className={percentageChange(coinData?.priceChange1w)}>
									{coinData?.priceChange1w + "%"}
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
		</>
	);
}
