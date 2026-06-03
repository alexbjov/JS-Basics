function solve(input) {
	const budget = Number(input[0]);
	const season = input[1];
	const fishermen = Number(input[2]);

	let rentCosts = 0;

	if (season === "Spring") {
		rentCosts = 3000;
	} else if (season === "Summer" || season === "Autumn") {
		rentCosts = 4200;
	} else if (season === "Winter") {
		rentCosts = 2600;
	}

	if (fishermen <= 6) {
		rentCosts *= 0.9;
	} else if (fishermen <= 11) {
		rentCosts *= 0.85;
	} else {
		rentCosts *= 0.75;
	}

	if (fishermen % 2 === 0 && season != "Autumn") {
		rentCosts *= 0.95;
	}

	if (budget >= rentCosts) {
		console.log(
			`Yes! You have ${(budget - rentCosts).toFixed(2)} leva left.`
		);
	} else {
		console.log(
			`Not enough money! You need ${(rentCosts - budget).toFixed(2)} leva.`
		);
	}
}

solve(["3000", "Summer", "11"]);
solve(["3600", "Autumn", "6"]);
solve(["2000", "Winter", "13"]);
