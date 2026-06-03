function solve(input) {
	let sum = 0;
	let i = 0;

	while (input[i] !== "NoMoreMoney") {
		const deposit = Number(input[i]);
		if (deposit < 0) {
			console.log("Invalid operation!");
			break;
		}

		console.log(`Increase: ${deposit.toFixed(2)}`);
		sum += deposit;
		i++;
	}

	console.log(`Total: ${sum.toFixed(2)}`);
}

solve(["5.51", "69.42", "100", "NoMoreMoney"]);
solve(["120", "45.55", "-150"]);
