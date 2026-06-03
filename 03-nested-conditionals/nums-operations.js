function solve(input) {
	const num1 = Number(input[0]);
	const num2 = Number(input[1]);
	const operator = input[2];
	let result = 0;
	let kindRes = "";

	if (operator === "+") result = num1 + num2;
	else if (operator === "-") result = num1 - num2;
	else if (operator === "*") result = num1 * num2;
	else if (operator === "/") {
		if (num2 !== 0) {
			result = num1 / num2;
		}
	} else if (operator === "%") {
		if (num2 !== 0) {
			result = num1 % num2;
		}
	}
	if (result % 2 === 0) {
		kindRes = "even";
	} else {
		kindRes = "odd";
	}

	if (operator === "+" || operator === "-" || operator === "*") {
		console.log(`${num1} ${operator} ${num2} = ${result} - ${kindRes}`);
	} else if (operator === "/") {
		if (num2 !== 0) {
			console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
		} else {
			console.log(`Cannot divide ${num1} by zero`);
		}
	} else if (operator === "%") {
		if (num2 !== 0) {
			console.log(`${num1} % ${num2} = ${result}`);
		} else {
			console.log(`Cannot divide ${num1} by zero`);
		}
	}
}

solve(["10", "12", "+"]);
solve(["123", "12", "/"]);
