function solve(input) {
	const budget = Number(input[0]);
	const numVideocards = Number(input[1]);
	const numProcessors = Number(input[2]);
	const numRam = Number(input[3]);

	const priceVideocards = numVideocards * 250;
	const priceProcessors = numProcessors * 0.35 * priceVideocards;
	const priceRam = numRam * 0.1 * priceVideocards;

	let totalPrice = priceVideocards + priceProcessors + priceRam;
	let discount = 0;

	if (numVideocards > numProcessors) {
		discount = 0.15 * totalPrice;
	}

	totalPrice -= discount;

	if (budget >= totalPrice) {
		console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
	} else {
		console.log(
			`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`
		);
	}
}

solve(["900", "2", "1", "3"]);
solve(["920.45", "3", "1", "1"]);
