function solve(input) {
	const typeTicket = input[0];
	const rows = Number(input[1]);
	const cols = Number(input[2]);

	let ticketPrice = 0;

	if (typeTicket === "Premiere") {
		ticketPrice = 12;
	} else if (typeTicket === "Normal") {
		ticketPrice = 7.5;
	} else {
		ticketPrice = 5;
	}

	const totalCosts = rows * cols * ticketPrice;
	console.log(`${totalCosts.toFixed(2)} leva`);
}

solve(["Premiere", "10", "12"]);
solve(["Normal", "21", "13"]);
solve(["Discount", "12", "30"]);
