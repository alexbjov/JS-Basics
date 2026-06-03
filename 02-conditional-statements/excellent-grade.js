function isExcellent(input) {
    const grade = Number(input[0])

    if (grade >= 5.50) {
        console.log("Excellent!")
    }
}

isExcellent(["6"])
isExcellent(["5.5"])
isExcellent(["5.2"])
