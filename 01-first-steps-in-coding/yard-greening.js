function yard_greening(input) {
    const GREENING_SQUARE_METER = 7.61
    const DISCOUNT = 0.18

    const areaOfYard = Number(input[0])
    const totalPrice = areaOfYard * GREENING_SQUARE_METER
    const discountAmount = totalPrice * DISCOUNT
    const finalPrice = totalPrice - discountAmount

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discountAmount} lv.`)
}

yard_greening(["550"])
yard_greening(["150"])
