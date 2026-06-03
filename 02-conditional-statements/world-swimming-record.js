function solve(input) {
	const record = Number(input[0]);
	const distanceInMeters = Number(input[1]);
	const timeInSecForAMeter = Number(input[2]);

	let totalTime = distanceInMeters * timeInSecForAMeter;
	const addedTime = Math.floor(distanceInMeters / 15) * 12.5;
	totalTime += addedTime;

	if (totalTime < record) {
		console.log(
			`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`
		);
	} else {
		console.log(
			`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`
		);
	}
}

solve(["10464", "1500", "20"]);
solve(["55555.67", "3017", "5.03"]);
