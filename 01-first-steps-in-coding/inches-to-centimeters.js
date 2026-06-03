function inchesToCentimeters(input) {
    const ONE_INCH = 2.54

    const lengthInches = Number(input[0])

    const lengthCentimeters = lengthInches * ONE_INCH
    console.log(lengthCentimeters)
}

inchesToCentimeters(["5"])
inchesToCentimeters(["7"])
