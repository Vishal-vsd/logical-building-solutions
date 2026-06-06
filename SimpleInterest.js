function calculateInterest(principal, rate, time){
    if(typeof principal !== "number" || typeof rate !== "number" || typeof time !== "number"){
        throw new Error("All values should be numbers")
    }
    if(!Number.isInteger(time)){
        throw new Error("Time should be an integeral value")
    }
    let simpleInterest = principal*rate*time/100

    simpleInterest = Number(simpleInterest.toFixed(2))
    console.log(typeof simpleInterest)
    return simpleInterest;
}

console.log("Simple interest on 10000 on a rate of 20% for 2 years is: ", calculateInterest(345, 5.75, 2))