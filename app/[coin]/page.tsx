"use client";
import React, { useEffect, useState } from 'react';
import { fetchCoinDetails } from '@/api/coinDetails';
import CoinInfo from "../components/CoinInfo/CoinInfo";
import Loading from '../components/Loading/Loading';
import { numberWithCommas, percentageChange } from '../helpers/helperFunctions';
import './types';
import { CoinDetails } from './types';

const Page = ({ params }) => {

  const [coinData, setCoinData] = useState<CoinDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const getCoinDetails = await fetchCoinDetails(params.coin);
      setCoinData(getCoinDetails);
      console.log("getCoinDetails", getCoinDetails);
      
    } catch (error) {
      throw new Error(
        `An error has occurred trying to display results: ${error}`
      )
    }
  }
  fetchData();
}, [])
  return (
			<div>
				{coinData ? <CoinInfo coinData={coinData} coinId={coinData.id} /> : <div className='flex justify-center'><Loading/></div>}
			</div>
		);
}

export default Page;
