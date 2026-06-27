function isPerfectNum(num) {
    if(num <= 1) return false;

    let sum = 1
    for(let i = 1; i<num; i++){
        if(num%i === 0){
            sum += i
        }
    }
    return sum === num
}

console.log("6 is a perfect number", isPerfectNum(6));

console.log("28 is a perfect number", isPerfectNum(28));

console.log("496 is a perfect number", isPerfectNum(496));
