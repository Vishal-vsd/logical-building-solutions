function reverseString(inputString){

    if(typeof inputString !== "string"){
        throw new TypeError("Only strings are allowed");
    }

    let result = ''
    for(let i= inputString.length - 1; i>=0; i--){
        result += inputString[i]
    }

    return result;
}

console.log(reverseString("Vishal"))
console.log(reverseString("Software Development"))
// console.log(reverseString(4))


function reverseString2(inputString){
    if(typeof inputString !== "string"){
        throw new TypeError("Only strings are allowed")
    }
    const splittedInput = inputString.split('');
    const reversedArray = splittedInput.reverse();
    const result = reversedArray.join('');
    return result;
}

console.log(reverseString2("Vishal"))
console.log(reverseString2("Software Development"))