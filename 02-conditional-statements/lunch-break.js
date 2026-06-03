function solve(input) {
    const movie = input[0];
    const timeForEpisode = Number(input[1]);
    const timeForRest = Number(input[2]);

    const lunchBreak = timeForRest / 8;
    const sleepBreak = timeForRest / 4;

    const neededTime = lunchBreak + sleepBreak + timeForEpisode;

    if (neededTime <= timeForRest) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(timeForRest - neededTime)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(neededTime - timeForRest)} more minutes.`)
    }
}

solve(["Game of Thrones", "60", "96"]);
solve(["Teen Wolf", "48", "60"]);
