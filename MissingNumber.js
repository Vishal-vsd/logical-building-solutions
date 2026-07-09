function findMissingNum(arr){
    const n = arr.length + 1
    const expectedSum = n * (n+1)/2
    const actualSum = arr.reduce((acc, cur) => acc + cur , 0)
    return expectedSum - actualSum;
}

console.log(findMissingNum([1,2,4,3,6]))


function findMissingNums(arr) {
    const max = Math.max(...arr);
    const set = new Set(arr);

    let missing = []

    for(let i = 1; i <= max; i++){
        if(!set.has(i)){
            missing.push(i)
        }
    }
    return missing

}

console.log(findMissingNums([1,2,4,6]))