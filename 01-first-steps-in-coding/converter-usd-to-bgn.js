function convertUsdToBgn(input) {
	const CHANGE_RATE = 1.79549;
	const usd = Number(input[0]);

	const bgn = usd * CHANGE_RATE;
	console.log(bgn);
}

convertUsdToBgn(["22"]);
convertUsdToBgn(["100"]);
convertUsdToBgn(["12.5"]);
