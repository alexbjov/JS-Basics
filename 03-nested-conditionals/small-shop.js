function solve(input) {
	const product = input[0];
	const city = input[1];
	const quantity = Number(input[2]);

	let unitPrice = 0;

	if (city === "Sofia") {
		if (product === "coffee") {
			unitPrice = 0.5;
		} else if (product === "water") {
			unitPrice = 0.8;
		} else if (product === "beer") {
			unitPrice = 1.2;
		} else if (product === "sweets") {
			unitPrice = 1.45;
		} else {
			unitPrice = 1.6;
		}
	} else if (city === "Plovdiv") {
		if (product === "coffee") {
			unitPrice = 0.4;
		} else if (product === "water") {
			unitPrice = 0.7;
		} else if (product === "beer") {
			unitPrice = 1.15;
		} else if (product === "sweets") {
			unitPrice = 1.3;
		} else {
			unitPrice = 1.5;
		}
	} else if (city === "Varna") {
		if (product === "coffee") {
			unitPrice = 0.45;
		} else if (product === "water") {
			unitPrice = 0.7;
		} else if (product === "beer") {
			unitPrice = 1.1;
		} else if (product === "sweets") {
			unitPrice = 1.35;
		} else {
			unitPrice = 1.55;
		}
	}
	console.log(quantity * unitPrice);
}

solve(["coffee", "Varna", "2"]);
solve(["peanuts", "Plovdiv", "1"]);
solve(["beer", "Sofia", "2"]);
solve(["water", "Plovdiv", "2"]);
solve(["sweets", "Sofia", "2.23"]);
