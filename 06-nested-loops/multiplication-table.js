function solve() {
    for (let first_num = 1; first_num <= 10; first_num++) {
        for (let second_num = 1; second_num <= 10; second_num++) {
            const result = first_num * second_num;
            console.log(`${first_num} * ${second_num} = ${result}`);
        }
    }
}

solve();
