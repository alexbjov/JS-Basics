function greaterNumber(input) {
    n1 = Number(input[0])
    n2 = Number(input[1])

    if (n1 >= n2) {
        console.log(n1)
    } else {
        console.log(n2)
    }
}

greaterNumber(["5", "3"])
greaterNumber(["3", "5"])
greaterNumber(["10", "10"])
greaterNumber(["-5", "5"])
