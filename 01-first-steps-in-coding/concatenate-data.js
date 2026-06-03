function concatenate(input) {
	const firstName = input[0];
	const lastName = input[1];
	const age = Number(input[2]);
	const city = input[3];

	console.log(
		`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`
	);
}

concatenate(["Mary", "Smith", 34, "London"]);
