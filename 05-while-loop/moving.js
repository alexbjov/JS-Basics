function solve(input) {
	const width = Number(input[0]);
	const length = Number(input[1]);
	const height = Number(input[2]);

	const totalSpace = width * length * height;
	let availableSpace = totalSpace;
	let index = 3;

	while (input[index] !== "Done") {
		const numLoads = Number(input[index]);
		availableSpace -= numLoads;

		if (availableSpace < 0) {
			console.log(
				`No more free space! You need ${-availableSpace} Cubic meters more.`
			);
			return;
		}
		index++;
	}
	console.log(`${availableSpace} Cubic meters left.`);
}

solve(["10", "10", "2", "20", "20", "20", "20", "122"]);
solve(["10", "1", "2", "4", "6", "Done"]);
