function solve(input) {
    const start = Number(input[0]);
    let bonus = 0;

    if (start <= 100) {
        bonus = 5;
    } else if (start < 1000) {
        bonus = 0.2 * start;
    } else {
        bonus = 0.1 * start;
    }

    if (start % 2 === 0) {
        bonus++;
    }

    if (start % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(start + bonus);
}

solve(["20"]);
solve(["175"]);
solve(["2703"]);
solve(["15875"]);
