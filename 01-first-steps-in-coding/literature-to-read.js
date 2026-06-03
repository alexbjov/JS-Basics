function readLiterature(input) {
	const bookPages = Number(input[0]);
	const readPagesForOneHour = Number(input[1]);
	const daysToRead = Number(input[2]);

	const hoursForReadingEveryDay =
		bookPages / readPagesForOneHour / daysToRead;

	console.log(hoursForReadingEveryDay);
}

readLiterature(["212 ", "20 ", "2 "]);
readLiterature(["432 ", "15 ", "4 "]);
