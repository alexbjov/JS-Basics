function solve(input) {
	const limit = Number(input[0]);

	let start = 0;
	let num = 2 * start + 1;

	while (num <= limit) {
		console.log(num);
		start = num;
		num = 2 * start + 1;
	}
}

// solve(["3"]);
// solve(["8"]);
solve(["17"]);
