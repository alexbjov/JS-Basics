function oddOrEven(input) {
    n1 = Number(input[0])

    if (n1 % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

oddOrEven(["2"])
oddOrEven(["3"])
oddOrEven(["25"])
oddOrEven(["1024"])
