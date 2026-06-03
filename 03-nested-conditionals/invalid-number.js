function solve(input) {
	const num = Number(input[0]);

	if (!((num >= 100 && num <= 200) || num === 0)) {
		console.log("invalid");
	}
}

solve(["75"]);
solve(["150"]);
solve(["220"]);
solve(["199"]);
solve(["-1"]);
solve(["100"]);
solve(["200"]);
solve(["0"]);
