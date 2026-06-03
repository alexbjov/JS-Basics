function solve(input) {
	const budget = Number(input[0]);
	const season = input[1];

	let destination = "";
	let cost = 0;
	let stay = "";

	if (budget <= 100) {
		destination = "Bulgaria";

		if (season === "summer") {
			cost = 0.3 * budget;
			stay = "Camp";
		} else if (season === "winter") {
			cost = 0.7 * budget;
			stay = "Hotel";
		}
	} else if (budget <= 1000) {
		destination = "Balkans";

		if (season === "summer") {
			cost = 0.4 * budget;
			stay = "Camp";
		} else if (season === "winter") {
			cost = 0.8 * budget;
			stay = "Hotel";
		}
	} else {
		destination = "Europe";
		cost = 0.9 * budget;
		stay = "Hotel";
	}

	console.log(`Somewhere in ${destination}`);
	console.log(`${stay} - ${cost.toFixed(2)}`);
}

solve(["50", "summer"]);
solve(["75", "winter"]);
solve(["312", "summer"]);
solve(["678.53", "winter"]);
solve(["1500", "summer"]);
