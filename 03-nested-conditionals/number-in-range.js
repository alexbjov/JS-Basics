function solve(input) {
	const myNum = Number(input[0]);

	if (myNum >= -100 && myNum <= 100 && myNum !== 0) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}

solve(["-25"]);
solve(["0"]);
solve(["25"]);
solve(["102"]);
