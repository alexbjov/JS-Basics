function solve(input) {
	const power = Number(input[0]);
	let result = 1;

	for (let i = 0; i <= power; i += 2) {
		console.log(result);
		result = result * 2 * 2;
	}
}

solve(["7"]);
