function solve(input) {
	const month = input[0];
	const spentNights = Number(input[1]);

	let nightInStudio = 0;
	let nightInApartment = 0;

	if (month === "May" || month === "October") {
		nightInStudio = 50;
		nightInApartment = 65;
	} else if (month === "June" || month === "September") {
		nightInStudio = 75.2;
		nightInApartment = 68.7;
	} else if (month === "July" || month === "August") {
		nightInStudio = 76;
		nightInApartment = 77;
	}

	let totalCostStudio = spentNights * nightInStudio;
	let totalCostApartment = spentNights * nightInApartment;

	if (spentNights > 7 && spentNights <= 14) {
		if (month === "May" || month === "October") {
			totalCostStudio *= 0.95;
		}
	} else if (spentNights > 14) {
		if (month === "May" || month === "October") {
			totalCostStudio *= 0.7;
		} else if (month === "June" || month === "September") {
			totalCostStudio *= 0.8;
		}
		totalCostApartment *= 0.9;
	}

	console.log(`Apartment: ${totalCostApartment.toFixed(2)} lv.`);
	console.log(`Studio: ${totalCostStudio.toFixed(2)} lv.`);
}

solve(["May", "15"]);
solve(["June", "14"]);
solve(["August", "20"]);
