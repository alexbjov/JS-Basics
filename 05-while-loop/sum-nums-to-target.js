function solve(input) {
	const initialSum = Number(input[0]);
	let sum = 0;
	let index = 1;

	while (sum < initialSum) {
		const element = Number(input[index]);
		sum += element;
		index++;
	}

	console.log(sum);
}

solve(["100", "10", "20", "30", "40"]);
solve(["20", "1", "2", "3", "4", "5", "6"]);
