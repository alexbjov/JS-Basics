function solve(input) {
	const numOfTabs = Number(input[0]);
	const salary = Number(input[1]);
	let fine = 0;
	let newSalary = salary;

	for (let i = 2; i < input.length; i++) {
		let site = input[i];
		if (site === "Facebook") {
			fine = 150;
			newSalary -= fine;
		} else if (site === "Instagram") {
			fine = 100;
			newSalary -= fine;
		} else if (site === "Reddit") {
			fine = 50;
			newSalary -= fine;
		}

		if (newSalary <= 0) {
			console.log("You have lost your salary.");
			return;
		}
	}
	console.log(newSalary);
}

solve([
	"10",
	"750",
	"Facebook",
	"Dev.bg",
	"Instagram",
	"Facebook",
	"Reddit",
	"Facebook",
	"Facebook"
]);
solve(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
