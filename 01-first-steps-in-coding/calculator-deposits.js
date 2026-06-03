function calculatorOfDeposit(input) {
	const deposit = Number(input[0]);
	const deadlineMonths = Number(input[1]);
	const rate = Number(input[2]);

	const amount = deposit + deadlineMonths * ((deposit * rate) / 100 / 12);

	console.log(amount);
}

calculatorOfDeposit(["200 ", "3 ", "5.7 "]);
calculatorOfDeposit(["2350", "6 ", "7 "]);
