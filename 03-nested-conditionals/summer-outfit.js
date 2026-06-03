function solve(input) {
	const temperature = Number(input[0]);
	const partOfDay = input[1];

	let outfit = "";
	let shoes = "";

	if (temperature >= 10 && temperature <= 18) {
		if (partOfDay === "Morning") {
			outfit = "Sweatshirt";
			shoes = "Sneakers";
		} else if (partOfDay === "Afternoon") {
			outfit = "Shirt";
			shoes = "Moccasins";
		} else if (partOfDay === "Evening") {
			outfit = "Shirt";
			shoes = "Moccasins";
		}
	} else if (temperature <= 24) {
		if (partOfDay === "Morning") {
			outfit = "Shirt";
			shoes = "Moccasins";
		} else if (partOfDay === "Afternoon") {
			outfit = "T-Shirt";
			shoes = "Sandals";
		} else if (partOfDay === "Evening") {
			outfit = "Shirt";
			shoes = "Moccasins";
		}
	} else if (temperature >= 25) {
		if (partOfDay === "Morning") {
			outfit = "T-Shirt";
			shoes = "Sandals";
		} else if (partOfDay === "Afternoon") {
			outfit = "Swim Suit";
			shoes = "Barefoot";
		} else if (partOfDay === "Evening") {
			outfit = "Shirt";
			shoes = "Moccasins";
		}
	}

	console.log(
		`It\'s ${temperature} degrees, get your ${outfit} and ${shoes}.`
	);
}

solve(["16", "Morning"]);
solve(["22", "Afternoon"]);
solve(["28", "Evening"]);
