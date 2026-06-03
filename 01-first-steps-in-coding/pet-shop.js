function petShop(input) {
    const DOG_FOOD_PRICE = 2.5
    const CAT_FOOD_PRICE = 4

    const packDogFood = Number(input[0])
    const packCatFood = Number(input[1])

    const totalCosts = packDogFood * DOG_FOOD_PRICE + packCatFood * CAT_FOOD_PRICE

    console.log(`${totalCosts} lv.`)
}

petShop(["5", "4"])
petShop(["13", "9"])
