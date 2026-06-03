function solve(input) {
    const hours = Number(input[0]);
    const minutes = Number(input[1]);

    let newMinutes = minutes + 15;
    let newHours = hours;

    if (newMinutes >= 60) {
        newMinutes -= 60;
        newHours++;

        if (newHours === 24) {
            newHours = 0;
        }
    }

    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`);
    }
}

solve(["1", "46"]);
solve(["0", "01"]);
solve(["23", "59"]);
solve(["11", "08"]);
solve(["12", "49"]);
