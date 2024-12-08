// Adds comma formatting to "Price" column.
export function currencyWithCommas(num) {
return "$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Adds comma formatting for anything that is NOT related to price of coin. 
export function numberWithCommas(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

// Handles assigning classes to each of the price change elements depending if there was a positive, negative, or no change in it's price.
export function percentageChange(currentChange) {
	if (currentChange === 0) return "no-change";
	return currentChange > 0 ? "green-change" : "red-change";
}

// Number abbreviation or formatting function. i.e. 100,000,000 --> 100m 
export function renderNumberFormatting(num) {
	return Intl.NumberFormat("en", { notation: "compact" }).format(num);
}

export function roundNum(num) {
	if (num >= 1000) {
		return currencyWithCommas(num.toFixed(2));
	}
	if (num > 1) {
		return "$" + num.toFixed(4);
	}
	if (num > 0.0001) {
		return "$" + num.toFixed(6);
	} 

	return "$" + num.toFixed(10);
}
