function solve(input) {
	const nameActor = input[0];
	let startPoints = Number(input[1]);
	const numJury = Number(input[2]);

	let nameLength = 0;
	let points = 0;
	let sum = startPoints;
	for (let i = 3; i < input.length; i++) {
		if (i % 2 === 1) {
			nameLength = input[i].length;
			continue;
		} else {
			points = Number(input[i]);
			sum += (nameLength * points) / 2;
			if (sum > 1250.5) {
				break;
			}
		}
	}

	if (sum > 1250.5) {
		console.log(
			`Congratulations, ${nameActor} got a nominee for leading role with ${sum.toFixed(1)}!`
		);
	} else {
		console.log(
			`Sorry, ${nameActor} you need ${(1250.5 - sum).toFixed(1)} more!`
		);
	}
}

solve([
	"Zahari Baharov",
	"205",
	"4",
	"Johnny Depp",
	"45",
	"Will Smith",
	"29",
	"Jet Lee",
	"10",
	"Matthew Mcconaughey",
	"39"
]);
solve([
	"Sandra Bullock",
	"340",
	"5",
	"Robert De Niro",
	"50",
	"Julia Roberts",
	"40.5",
	"Daniel Day-Lewis",
	"39.4",
	"Nicolas Cage",
	"29.9",
	"Stoyanka Mutafova",
	"33"
]);
