function biggestNum(arrayOfNumbers){
    if(!arrayOfNumbers || arrayOfNumbers === 0){
        throw new Error("We need some numbers in the array")
    }
    let biggestNum = arrayOfNumbers[0];

    for(let i =1; i<=arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > biggestNum)
            biggestNum = arrayOfNumbers[i]
    }
;
    return biggestNum;
}

console.log(biggestNum([10,24,45,2,56]));

function biggestNum2(arrayOfNumbers){
    let biggestNum = arrayOfNumbers[0]
   const result = arrayOfNumbers.forEach((element) => {
        if(element > biggestNum){
            biggestNum = element;
        }
        return 
    });
}

console.log(biggestNum2([10,230,34,54]))