function solve(input) {
	const start = Number(input[0]);
	const end = Number(input[1]);
	let sum = 0;
	let output = "";

	for (let num = start; num <= end; num++) {
		if (num % 9 === 0) {
			sum += num;
			output += num + "\n";
		}
	}

	console.log(`The sum: ${sum}`);
	console.log(output);
}

solve(["100", "200"]);
