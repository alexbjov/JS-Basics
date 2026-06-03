function solve(input) {
	const user = input[0];
	const password = input[1];

	let index = 2;
	let data = input[index];

	while (data !== password) {
		index++;
		data = input[index];
	}

	console.log(`Welcome ${user}!`);
}

solve(["Nakov", "1234", "Pass", "1324", "1234"]);
solve(["Gosho", "secret", "secret"]);
