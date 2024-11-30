import Loading from "../components/Loading/Loading";
import CoinInfo from "../components/CoinInfo/CoinInfo";

const Page = async ({ params }) => {
	interface Params {
		coin: string;
	}

	const apiKey = process.env.NEXT_PUBLIC_APP_KEY;

	if (!apiKey) {
		return <div>Error: API key is missing or invalid.</div>;
	}

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			"X-API-KEY": apiKey,
		},
	};

	try {
		const res = await fetch(
			`https://openapiv1.coinstats.app/coins/${params.coin}`,
			options
		);
		const coin = await res.json();

		if (!res.ok) {
			throw new Error(
				`HTTP Error status code: ${res.status} - ${res.statusText}`
			);
		}

		return (
			<div>
				{coin ? <CoinInfo coinData={coin} coinId={coin.id} /> : <Loading />}
			</div>
		);
	} catch (error) {
		let message = "Unknown Error";
		if (error instanceof Error) {
			message = error.message;
		}
		console.error("There was an error fetching data: ", message);

		return (
			<div>
				<p>
					<strong>{message}</strong>
				</p>
			</div>
		);
	}
};

export default Page;
