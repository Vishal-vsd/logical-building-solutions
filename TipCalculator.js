function calculateTip(amount, tip, locale, currenncy) {
    let result = []
    for (let i = 0; i < tip.length; i++) {
        let tipAmount = amount * (tip[i] / 100)
        // result.push(tipAmount);

        const formatter = Intl.NumberFormat(locale, {
            style: "currency",
            currency: currenncy
        })

        result.push(formatter.format(tipAmount))
    }
    return result;
}

console.log("1000, [10,15,20] =", calculateTip(1000, [10, 15, 20], "en-IN", "INR"))

console.log("997, [10,15,20] =", calculateTip(997, [10, 15, 20], "en-US", "USD"))