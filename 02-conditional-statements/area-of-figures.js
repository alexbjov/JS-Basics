function areaOfFigures(input) {
	const shape = input[0];
	let area = 0;

	if (shape == "square") {
		const sideA = Number(input[1]);
		area = sideA * sideA;
	} else if (shape == "rectangle") {
		const length = Number(input[1]);
		const width = Number(input[2]);
		area = length * width;
	} else if (shape == "circle") {
		const radius = Number(input[1]);
		area = radius * radius * Math.PI;
	} else if (shape == "triangle") {
		const base = Number(input[1]);
		const height = Number(input[2]);
		area = (base * height) / 2;
	}

	console.log(area.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
