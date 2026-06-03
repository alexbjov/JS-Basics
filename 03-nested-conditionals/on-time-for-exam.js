function solve(input) {
	const hourExam = Number(input[0]);
	const minutesExam = Number(input[1]);
	const hourArrival = Number(input[2]);
	const minutesArrival = Number(input[3]);

	const timeExamMinutes = hourExam * 60 + minutesExam;
	const timeArrivalMinutes = hourArrival * 60 + minutesArrival;

	if (timeArrivalMinutes > timeExamMinutes) {
		console.log("Late");
	} else if (timeExamMinutes - timeArrivalMinutes <= 30) {
		console.log("On time");
	} else if (timeExamMinutes - timeArrivalMinutes > 30) {
		console.log("Early");
	}

	const timeDiff = timeExamMinutes - timeArrivalMinutes;
	if (timeDiff < 60 && timeDiff > 0) {
		console.log(`${timeDiff} minutes before the start`);
	} else if (timeDiff >= 60) {
		const hoursDiff = Math.floor(timeDiff / 60);
		const minutesDiff = timeDiff % 60;

		if (minutesDiff < 10) {
			console.log(`${hoursDiff}:0${minutesDiff} hours before the start`);
		} else {
			console.log(`${hoursDiff}:${minutesDiff} hours before the start`);
		}
	}

	const timeDiff2 = timeArrivalMinutes - timeExamMinutes;
	if (timeDiff2 < 60 && timeDiff2 > 0) {
		console.log(`${timeDiff2} minutes after the start`);
	} else if (timeDiff2 >= 60) {
		const hoursDiff = Math.floor(timeDiff2 / 60);
		const minutesDiff = timeDiff2 % 60;

		if (minutesDiff < 10) {
			console.log(`${hoursDiff}:0${minutesDiff} hours after the start`);
		} else {
			console.log(`${hoursDiff}:${minutesDiff} hours after the start`);
		}
	}
}

solve(["9", "30", "9", "50"]);
solve(["9", "00", "8", "30"]);
solve(["16", "00", "15", "00"]);
solve(["9", "00", "10", "30"]);
solve(["14", "00", "13", "55"]);
solve(["11", "30", "8", "12"]);
solve(["10", "00", "10", "00"]);
solve(["11", "30", "10", "55"]);
solve(["11", "30", "12", "29"]);
