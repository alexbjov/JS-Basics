function solve(input) {
	const product = input[0];
	const day = input[1];
	const quantity = Number(input[2]);
	let unitPrice = 0;

	if (
		day === "Monday" ||
		day === "Tuesday" ||
		day === "Wednesday" ||
		day === "Thursday" ||
		day === "Friday"
	) {
		if (product === "banana") {
			unitPrice = 2.5;
		} else if (product === "apple") {
			unitPrice = 1.2;
		} else if (product === "orange") {
			unitPrice = 0.85;
		} else if (product === "grapefruit") {
			unitPrice = 1.45;
		} else if (product === "kiwi") {
			unitPrice = 2.7;
		} else if (product === "pineapple") {
			unitPrice = 5.5;
		} else if (product === "grapes") {
			unitPrice = 3.85;
		} else {
			console.log("error");
			return;
		}
	} else if (day === "Saturday" || day === "Sunday") {
		if (product === "banana") {
			unitPrice = 2.7;
		} else if (product === "apple") {
			unitPrice = 1.25;
		} else if (product === "orange") {
			unitPrice = 0.9;
		} else if (product === "grapefruit") {
			unitPrice = 1.6;
		} else if (product === "kiwi") {
			unitPrice = 3;
		} else if (product === "pineapple") {
			unitPrice = 5.6;
		} else if (product === "grapes") {
			unitPrice = 4.2;
		} else {
			console.log("error");
			return;
		}
	} else {
		console.log("error");
		return;
	}

	console.log((quantity * unitPrice).toFixed(2));
}

solve(["apple", "Tuesday", "2"]);
solve(["orange", "Sunday", "3"]);
solve(["kiwi", "Monday", "2.5"]);
solve(["grapes", "Saturday", "0.5"]);
solve(["tomato", "Monday", "0.5"]);
