function solve(input) {
	const word = input[0];
	let sum = 0;

	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		if (letter === "a") {
			sum++;
		} else if (letter === "e") {
			sum += 2;
		} else if (letter === "i") {
			sum += 3;
		} else if (letter === "o") {
			sum += 4;
		} else if (letter === "u") {
			sum += 5;
		}
	}
	console.log(sum);
}

solve(["hello"]);
solve(["bamboo"]);
