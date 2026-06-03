function solve(input) {
	const magicNum = Number(input[0]);
	let validCombinations = 0;
	for (let x1 = 0; x1 <= magicNum; x1++) {
		for (let x2 = 0; x2 <= magicNum; x2++) {
			for (let x3 = 0; x3 <= magicNum; x3++) {
				if (x1 + x2 + x3 === magicNum) {
					validCombinations++;
				}
			}
		}
	}
	console.log(validCombinations);
}

// solve(["25"]);
solve(["20"]);
