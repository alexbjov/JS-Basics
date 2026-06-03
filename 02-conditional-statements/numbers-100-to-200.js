function numbers100to200(input) {
    myNumber = Number(input[0])

    if (myNumber < 100) {
        console.log("Less than 100")
    } else if (myNumber <= 200) {
        console.log("Between 100 and 200")
    } else if (myNumber > 200) {
        console.log("Greater than 200")
    }
}

numbers100to200(["95"])
numbers100to200(["120"])
numbers100to200(["210"])
