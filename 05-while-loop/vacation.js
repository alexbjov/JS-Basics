function solve(input) {
	const excursionCost = Number(input[0]);
	const startBudget = Number(input[1]);

	let index = 2;
	let endBudget = startBudget;
	let spendingDays = 0;
	let totalDays = 0;
	while (index < input.length) {
		let action = input[index];
		let money = Number(input[index + 1]);

		totalDays++;
		if (action === "spend") {
			spendingDays++;
			if (spendingDays === 5) {
				console.log("You can't save the money.");
				console.log(`${totalDays}`);
				break;
			}

			endBudget -= money;
			if (endBudget < 0) {
				endBudget = 0;
			}
		} else if (action === "save") {
			spendingDays = 0;
			endBudget += money;
		}
		index += 2;
	}
	if (endBudget >= excursionCost) {
		console.log(`You saved the money for ${totalDays} days.`);
	}
}

solve(["2000", "1000", "spend", "1200", "save", "2000"]);
solve([
	"110",
	"60",
	"spend",
	"10",
	"spend",
	"10",
	"spend",
	"10",
	"spend",
	"10",
	"spend",
	"10"
]);
solve([
	"250",
	"150",
	"spend",
	"50",
	"spend",
	"50",
	"save",
	"100",
	"save",
	"100"
]);
