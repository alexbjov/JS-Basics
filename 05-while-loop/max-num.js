function solve(input) {
	let max = 0;
	let i = 0;
	let temp = 0;

	while (input[i] !== "Stop") {
		if (i === 0) {
			max = Number(input[i]);
		} else {
			temp = Number(input[i]);
			if (temp >= max) {
				max = temp;
			}
		}
		i++;
	}
	console.log(max);
}

solve(["100", "99", "80", "70", "Stop"]);
solve(["-10", "20", "-30", "Stop"]);
solve(["45", "-20", "7", "99", "Stop"]);
solve(["999", "Stop"]);
solve(["-1", "-2", "Stop"]);
