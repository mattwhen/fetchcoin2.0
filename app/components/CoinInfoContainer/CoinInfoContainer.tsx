import React from 'react';
import CoinInfo from '../CoinInfo/CoinInfo';
import PriceGraph from '../PriceGraph/PriceGraph';
import "./module.CoinInfoContainer.css";

const CoinInfoContainer = ({coinData, coinId}) => {
  return (
    <div className='coin-container'>
      <CoinInfo coinData={coinData} coinId={coinData.id}/>
      <PriceGraph />
    </div>
  );
}

export default CoinInfoContainer;
