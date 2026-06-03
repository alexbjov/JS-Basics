function solve(input) {
	let i = 0;
	while (input[i] !== "Stop") {
		const word = input[i];
		console.log(word);
		i++;
	}
}

solve([
	"Sofia",
	"Berlin",
	"Moscow",
	"Athens",
	"Madrid",
	"London",
	"Paris",
	"Stop",
	"AfterStop"
]);
