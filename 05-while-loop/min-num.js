function solve(input) {
	let min = 0;
	let i = 0;
	let temp = 0;

	while (input[i] !== "Stop") {
		if (i === 0) {
			min = Number(input[i]);
		} else {
			temp = Number(input[i]);
			if (temp <= min) {
				min = temp;
			}
		}
		i++;
	}
	console.log(min);
}

solve(["100", "99", "80", "70", "Stop"]);
solve(["-10", "20", "-30", "Stop"]);
solve(["45", "-20", "7", "99", "Stop"]);
solve(["999", "Stop"]);
solve(["-1", "-2", "Stop"]);
