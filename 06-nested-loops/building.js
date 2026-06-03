function solve(input) {
	const floors = Number(input[0]);
	const rooms = Number(input[1]);

	for (let floor = floors; floor >= 1; floor--) {
		let output = "";
		for (let room = 0; room < rooms; room++) {
			if (floor === floors) {
				output += `L${floor}${room} `;
			} else if (floor % 2 === 0) {
				output += `O${floor}${room} `;
			} else if (floor % 2 === 1) {
				output += `A${floor}${room} `;
			}
		}
		console.log(output);
	}
}

// solve(["6", "4"]);
// solve(["9", "5"]);
solve(["4", "4"]);
