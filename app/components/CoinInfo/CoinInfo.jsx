import Image from 'next/image';
import {
	numberWithCommas,
	percentageChange,
	roundNum,
} from '../../helpers/helperFunctions';
import "./module.CoinInfo.css";

// Rendered when
export default function CoinInfo({ coinData, coinId }) {
	return (
		<div className='coin-container'>
			<div className='coin-info'>
				<div className='coin-header'>
					<div className='name-header'>
						<Image id='coin-icon' src={coinData?.icon} alt={`${coinId} icon`} width={250} height={250}/>
						<p className='text-2xl mx-3'>{coinData?.name}</p>
						<p className=''>Rank: {coinData?.rank}</p>
					</div>
				</div>
				<div className='coin-price'>
					<p className='font-bold text-4xl'>
						{roundNum(coinData?.price)}
					</p>
					<span className='text-2xl ml-2'>
						<p
							className={percentageChange(coinData?.priceChange1d)}
						>
							{coinData?.priceChange1d + '%'}
						</p>
					</span>
				</div>
			</div>
		</div>
	);
}
