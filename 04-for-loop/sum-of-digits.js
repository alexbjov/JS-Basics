function solve(input) {
	const textNum = input[0];
	let sum = 0;

	for (let i = 0; i < textNum.length; i++) {
		const cipher = Number(textNum[i]);
		sum += cipher;
	}

	console.log(`The sum of the digits is:${sum}`);
}

solve(["1234"]);
