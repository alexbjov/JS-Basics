function solve(input) {
	const budget = Number(input[0]);
	const numActors = Number(input[1]);
	const clothsPriceForAnActor = Number(input[2]);

	const decor = 0.1 * budget;
	let totalClothsPrice = numActors * clothsPriceForAnActor;

	if (numActors > 150) {
		totalClothsPrice = 0.9 * totalClothsPrice;
	}

	const totalCosts = decor + totalClothsPrice;

	if (budget >= totalCosts) {
		console.log("Action!");
		console.log(
			`Wingard starts filming with ${(budget - totalCosts).toFixed(2)} leva left.`
		);
	} else {
		console.log("Not enough money!");
		console.log(
			`Wingard needs ${(totalCosts - budget).toFixed(2)} leva more.`
		);
	}
}

solve(["20000", "120", "55.5"]);
solve(["15437.62", "186", "57.99"]);
solve(["9587.88", "222", "55.68"]);
