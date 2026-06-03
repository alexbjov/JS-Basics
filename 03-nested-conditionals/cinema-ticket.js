function solve(input) {
	const day = input[0];
	let price = 0;

	switch (day) {
		case "Monday":
		case "Tuesday":
		case "Friday":
			price = 12;
			break;
		case "Wednesday":
		case "Thursday":
			price = 14;
			break;
		case "Saturday":
		case "Sunday":
			price = 16;
			break;
	}

	console.log(price);
}

solve(["Monday"]);
solve(["Tuesday"]);
solve(["Wednesday"]);
solve(["Thursday"]);
solve(["Friday"]);
solve(["Saturday"]);
solve(["Sunday"]);
