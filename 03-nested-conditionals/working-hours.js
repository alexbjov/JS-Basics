function solve(input) {
	const hour = Number(input[0]);
	const day = input[1];

	if (hour >= 10 && hour <= 18) {
		switch (day) {
			case "Monday":
			case "Tuesday":
			case "Wednesday":
			case "Thursday":
			case "Friday":
			case "Saturday":
				console.log("open");
				break;
			case "Sunday":
				console.log("closed");
				break;
		}
	} else {
		console.log("closed");
	}
}

solve(["11", "Monday"]);
solve(["19", "Friday"]);
solve(["11", "Sunday"]);
