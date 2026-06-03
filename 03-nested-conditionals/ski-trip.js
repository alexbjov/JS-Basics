function solve(input) {
	const daysOfStay = Number(input[0]);
	const roomType = input[1];
	const review = input[2];

	let unitPrice = 0;
	let totalCost = 0;

	if (roomType === "room for one person") {
		unitPrice = 18;
		totalCost = (daysOfStay - 1) * unitPrice;
	} else if (roomType === "apartment") {
		unitPrice = 25;
		if (daysOfStay < 10) {
			totalCost = (daysOfStay - 1) * unitPrice * 0.7;
		} else if (daysOfStay <= 15) {
			totalCost = (daysOfStay - 1) * unitPrice * 0.65;
		} else if (daysOfStay > 15) {
			totalCost = (daysOfStay - 1) * unitPrice * 0.5;
		}
	} else if (roomType === "president apartment") {
		unitPrice = 35;
		if (daysOfStay < 10) {
			totalCost = (daysOfStay - 1) * unitPrice * 0.9;
		} else if (daysOfStay <= 15) {
			totalCost = (daysOfStay - 1) * unitPrice * 0.85;
		} else if (daysOfStay > 15) {
			totalCost = (daysOfStay - 1) * unitPrice * 0.8;
		}
	}

	if (review === "positive") {
		totalCost *= 1.25;
	} else if (review === "negative") {
		totalCost *= 0.9;
	}

	console.log(totalCost.toFixed(2));
}

solve(["14", "apartment", "positive"]);
solve(["30", "president apartment", "negative"]);
solve(["12", "room for one person", "positive"]);
solve(["2", "apartment", "positive"]);
