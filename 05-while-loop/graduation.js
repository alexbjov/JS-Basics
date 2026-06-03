function solve(input) {
	const student = input[0];
	let sum = 0;
	let classNum = 1;

	let fails = 0;
	while (classNum <= 12) {
		const grade = Number(input[classNum]);
		if (grade >= 4) {
			sum += grade;
			classNum++;
			fails = 0;
		} else {
			fails++;
		}

		if (fails === 2) {
			console.log(`${student} has been excluded at ${classNum} grade`);
			return;
		}
	}

	console.log(
		`${student} graduated. Average grade: ${(sum / 12).toFixed(2)}`
	);
}

solve([
	"Gosho",
	"5",
	"5.5",
	"6",
	"5.43",
	"5.5",
	"6",
	"5.55",
	"5",
	"6",
	"6",
	"5.43",
	"5"
]);
solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
