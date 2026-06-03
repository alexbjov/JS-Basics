function solve(input) {
    const age = Number(input[0]);
    const gender = input[1];

    if (gender === "m") {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    }
}

solve(["12", "f"]);
solve(["17", "m"]);
solve(["25", "f"]);
solve(["13.5", "m"]);
