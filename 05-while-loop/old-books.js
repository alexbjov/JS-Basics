function solve(input) {
	const neededBook = input[0];

	let isBookFound = false;
	let bookCount = 0;
	let index = 1;
	while (input[index] !== "No More Books") {
		if (neededBook === input[index]) {
			isBookFound = true;
			break;
		}
		bookCount++;
		index++;
	}

	if (isBookFound) {
		console.log(`You checked ${bookCount} books and found it.`);
	} else {
		console.log("The book you search is not here!");
		console.log(`You checked ${bookCount} books.`);
	}
}

solve(["Troy", "Stronger", "Life Style", "Troy"]);
solve([
	"The Spot",
	"Hunger Games",
	"Harry Potter",
	"Torronto",
	"Spotify",
	"No More Books"
]);
