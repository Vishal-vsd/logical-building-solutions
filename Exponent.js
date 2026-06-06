function calculateExponent(base, exponent){
    let result = 1;
    for(i=1; i<=exponent; i++){
        result=result*base
    }
    return result
}

// console.log(base)
console.log(calculateExponent(3,3))

function Exponent1(base, exponent){
    let result = Math.pow(base, exponent)
    console.log(result)
}

Exponent1(2,5)

