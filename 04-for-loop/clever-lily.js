function solve(input) {
	const n = Number(input[0]);
	const totalCost = Number(input[1]);
	const toyPrice = Number(input[2]);

	let sum = 0;
	for (let age = 1; age <= n; age++) {
		if (age % 2 === 1) {
			sum += toyPrice;
		} else {
			sum += Math.floor(age / 2) * 10;
			sum--;
		}
	}

	if (sum >= totalCost) {
		console.log(`Yes! ${(sum - totalCost).toFixed(2)}`);
	} else {
		console.log(`No! ${(totalCost - sum).toFixed(2)}`);
	}
}

solve(["10", "170.00", "6"]);
solve(["21", "1570.98", "3"]);
