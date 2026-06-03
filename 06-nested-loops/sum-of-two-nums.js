function solve(input) {
	const start = Number(input[0]);
	const end = Number(input[1]);
	const magicNum = Number(input[2]);

	let combinations = 0;
	let isFound = false;

	for (let x = start; x <= end; x++) {
		for (let y = start; y <= end; y++) {
			combinations++;
			if (x + y == magicNum) {
				console.log(
					`Combination N:${combinations} (${x} + ${y} = ${magicNum})`
				);
				isFound = true;
				break;
			}
		}

		if (isFound) {
			break;
		}
	}

	if (!isFound) {
		console.log(
			`${combinations} combinations - neither equals ${magicNum}`
		);
	}
}

// solve(["1", "10", "5"]);
// solve(["23", "24", "20"]);
solve(["88", "888", "1000"]);
