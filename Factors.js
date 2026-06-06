function findFactors(n){
    if(!Number.isFinite(n)){
        throw new Error("input number must be a positive integer")
    }
    if(n < 1){
        throw new Error("input number must be greater than 1")
    }
    let factors = []
    for(let i= 1; i<=n; i++){
        if(n%i===0){
            factors.push(i)
        }
    }
    return factors;
}

console.log(findFactors(0))