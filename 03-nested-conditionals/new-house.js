function solve(input) {
	const flowerType = input[0];
	const numOfFlowers = Number(input[1]);
	const budget = Number(input[2]);

	let totalCosts = 0;

	if (flowerType === "Roses") {
		totalCosts = numOfFlowers * 5;
		if (numOfFlowers > 80) {
			totalCosts *= 0.9;
		}
	} else if (flowerType === "Dahlias") {
		totalCosts = numOfFlowers * 3.8;
		if (numOfFlowers > 90) {
			totalCosts *= 0.85;
		}
	} else if (flowerType === "Tulips") {
		totalCosts = numOfFlowers * 2.8;
		if (numOfFlowers > 80) {
			totalCosts *= 0.85;
		}
	} else if (flowerType === "Narcissus") {
		totalCosts = numOfFlowers * 3;
		if (numOfFlowers < 120) {
			totalCosts *= 1.15;
		}
	} else if (flowerType === "Gladiolus") {
		totalCosts = numOfFlowers * 2.5;
		if (numOfFlowers < 80) {
			totalCosts *= 1.2;
		}
	}

	if (budget >= totalCosts) {
		console.log(
			`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${(budget - totalCosts).toFixed(2)} leva left.`
		);
	} else {
		console.log(
			`Not enough money, you need ${(totalCosts - budget).toFixed(2)} leva more.`
		);
	}
}

solve(["Roses", "55", "250"]);
solve(["Tulips", "88", "260"]);
solve(["Narcissus", "119", "360"]);
