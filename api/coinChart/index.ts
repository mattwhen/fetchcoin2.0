import { CoinChart } from "./types";

export const fetchCoinChart = async (endpoint: Promise<CoinChart>) => {
    
    try {
        const apiKey = process.env.NEXT_PUBLIC_APP_KEY || "";
        const options = {
            method: 'GET',
            headers: {'X-API-KEY': 'jiwIldx8TSZLXxrEGxipfh+dZt7o9yArzqrjw2sEofA='}
          };

        const res = await fetch(`https://openapiv1.coinstats.app/coins/${endpoint}/charts?period=1y`, options);
        const data = await res.json();

        console.log(data);
        
    } catch (error) {
        console.error("There was an error retrieving chart data", error);
    }
}