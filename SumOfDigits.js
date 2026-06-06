function digitalSum(num) {
  if (num < 0) {
    throw new Error("num must be a positive number");
  }
  const numAsString = num.toString();
  const splittedStr = numAsString.split("");
  let sumOfDigits = 0;
  splittedStr.forEach((num) => {
    sumOfDigits += parseInt(num);
  });

  return sumOfDigits;
}

console.log(digitalSum(123));

function sumOfDigits(num){
    let sumOfDigits = 0;
    while(num>0){
        let lastDigit = num%10;
        num = Math.floor(num/10);
        sumOfDigits += lastDigit
    }

    return sumOfDigits
}

console.log(sumOfDigits(2376))


function sumOfDigitsMath(num){
    num = Math.abs(num);
    let sum = 0;

    while(num >0){
        sum += num%10;
        num= Math.floor(num/10)
    }

    return sum;
}

console.log(sumOfDigitsMath(456))


function sumOfDigits3(num){
    num = Math.abs(num).toString().split("");
    return num.reduce((sum, digit)=> sum + Number(digit), 0)
}

console.log(sumOfDigits3(768));
console.log(sumOfDigits3(0))