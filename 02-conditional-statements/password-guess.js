function passwordGuess(input) {
    const SECRET_PASS = "s3cr3t!P@ssw0rd"

    const userPass = input[0]

    if (userPass == SECRET_PASS) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["qwerty"])
passwordGuess(["s3cr3t!P@ssw0rd"])
passwordGuess(["s3cr3t!p@ss"])
