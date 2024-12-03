import { CoinDetails } from "./types";

const apiKey = process.env.NEXT_PUBLIC_APP_KEY || "";

export const fetchCoinDetails = async (endpoint: Promise<CoinDetails>) => {
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"X-API-KEY": apiKey,
		},
	};

	try {
		const res = await fetch(
			`https://openapiv1.coinstats.app/coins/${endpoint}`,
			options
		);
		if (!res.ok) {
			throw new Error(
				`HTTP Error status code: ${res.status} - ${res.statusText}`
			);
		}

		const coin = await res.json();
		return coin;
	} catch (error) {
		let message = "Unknown Error";
		if (error instanceof Error) {
			message = error.message;
		}

        console.error("There was an error fetching data: ", message);
        
	}
};
