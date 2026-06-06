function isLeapYear(year){
    if(!Number.isFinite(year) && year >=0){
        throw new Error("It should be a valid number")
    }
    const remainder = year%4;
    if(remainder=== 0){
        return true;
    }
    return false;
}

console.log(isLeapYear(2002));
console.log(isLeapYear(2023))
console.log(isLeapYear(0))
console.log(isLeapYear(2024))

function isLeapYear2(year){
    return year%4 === 0;
}

