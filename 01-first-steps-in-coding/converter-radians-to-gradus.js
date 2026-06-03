function convertUsdToBgn(input) {
	const coefficient = 180 / Math.PI;
	const radians = Number(input[0]);
	const gradus = radians * coefficient;
	console.log(gradus);
}

convertUsdToBgn(["3.1416"]);
convertUsdToBgn(["6.2832"]);
