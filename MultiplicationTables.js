function multiples(tableOf, tableTill){
    console.log(tableOf, tableTill)
    if(typeof tableOf !=="number" || typeof tableTill !== "number"){
        throw new Error("input must be a number")
    }
    if(tableOf < 0 || tableTill <0) {
        throw new Error("inputs must be greater than 0")
    }
    if(!Number.isInteger(tableOf) || !Number.isInteger(tableTill)){
        throw new Error("Decimal values are not allowed.")
    }
    for(let i=1; i<=tableTill; i++){
        console.log(`${tableOf} * ${i} = ${i*tableOf}`)
    }
}

multiples(4,10)

function multiples2(tableOf, tableTill){
    for(let i=tableOf; i<=tableOf*tableTill; i=i+tableOf){
        console.log(i)
    }
}

multiples2(3,10)

// using recursion
function mupliplesByRecursion(tableOf, tableTill, current = 1){
    if(current > tableTill) return;

    console.log(`${tableOf} * ${current} = ${tableOf * current}`);
    multiples(tableOf, tableTill, current + 1);
}

mupliplesByRecursion(5, 10)