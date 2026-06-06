function calculateAverage(arrOfNums){
    let total = 0;
    let average = 0;
    for(i=0; i<arrOfNums.length; i++){
        if(arrOfNums[i] < 0){
            throw new Error("all numbers should be positive integers")
        }
        total = total + arrOfNums[i]
        average = total/arrOfNums.length
    }
    return Number(average.toFixed(2))
}

console.log(calculateAverage([1,5,2,6,10,2]))
// console.log(calculateAverage([1,5]))
// console.log(calculateAverage([4]))

function calculateAverage2(arrOfNums){
    let total = 0;
    let average = 0;

    arrOfNums.forEach(num => {
        total = total + num
        average = total/arrOfNums.length
    });

    return Number(average.toFixed(2)) 

}

console.log(calculateAverage2([1,2,4]))