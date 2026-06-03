function solve(input) {
	const excursionPrice = Number(input[0]);
	const puzzles = Number(input[1]);
	const dolls = Number(input[2]);
	const teddyBears = Number(input[3]);
	const minions = Number(input[4]);
	const trucks = Number(input[5]);

	const totalToys = puzzles + dolls + teddyBears + minions + trucks;

	let totalPrice =
		puzzles * 2.6 +
		dolls * 3 +
		teddyBears * 4.1 +
		minions * 8.2 +
		trucks * 2;

	let discount = 0;

	if (totalToys >= 50) {
		discount = 0.25 * totalPrice;
	}

	const priceWithDiscount = totalPrice - discount;
	const rent = 0.1 * priceWithDiscount;

	const savedMoney = priceWithDiscount - rent;

	if (savedMoney >= excursionPrice) {
		console.log(
			`Yes! ${(savedMoney - excursionPrice).toFixed(2)} lv left.`
		);
	} else {
		console.log(
			`Not enough money! ${(excursionPrice - savedMoney).toFixed(2)} lv needed.`
		);
	}
}

solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["320", "8", "2", "5", "5", "1"]);
