function solve(input) {
	const city = input[0];
	const sales = Number(input[1]);
	if (sales < 0) {
		console.log("error");
		return;
	}
	let percentage = 0;

	if (city === "Sofia") {
		if (sales <= 500) {
			percentage = 5;
		} else if (sales <= 1000) {
			percentage = 7;
		} else if (sales <= 10000) {
			percentage = 8;
		} else if (sales > 10000) {
			percentage = 12;
		}
	} else if (city === "Varna") {
		if (sales <= 500) {
			percentage = 4.5;
		} else if (sales <= 1000) {
			percentage = 7.5;
		} else if (sales <= 10000) {
			percentage = 10;
		} else if (sales > 10000) {
			percentage = 13;
		}
	} else if (city === "Plovdiv") {
		if (sales <= 500) {
			percentage = 5.5;
		} else if (sales <= 1000) {
			percentage = 8;
		} else if (sales <= 10000) {
			percentage = 12;
		} else if (sales > 10000) {
			percentage = 14.5;
		}
	} else {
		console.log("error");
		return;
	}

	console.log(((sales * percentage) / 100).toFixed(2));
}

solve(["Sofia", "1500"]);
solve(["Plovdiv", "499.99"]);
solve(["Varna", "3874.50"]);
solve(["Kaspichan", "-50"]);
