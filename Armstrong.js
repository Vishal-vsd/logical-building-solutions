function isArmstrong(num){
    if(!Number.isInteger(num)) {
        throw new Error("Input must be a whole number")
    }

    let cleanNum = Math.abs(num)
    let str = cleanNum.toString()
    let sum = 0

    for(let i = 0; i< str.length; i++){
        sum = sum + parseInt(str[i])**str.length;
    }
    if(sum === num) return true;

    return false;
}
console.log(isArmstrong(153))
console.log(isArmstrong(122))
console.log("370 is an Armstrong number:", isArmstrong(370))

function isArmstrong1(num) {
let inputNumber = num;
  let digits = [];
  console.log("num is", num);
  while (num > 0) {
    let lastdigit = num % 10;
    num = Math.floor(num / 10);
    digits.push(lastdigit);
  }
  const length = digits.length;
  let sum = 0;
  digits.forEach((d) => {
    sum += Math.pow(d, length);
  });
  console.log("sum is", sum);

  return sum === inputNumber
}

console.log("isArmstrong 153", isArmstrong1(153));


// with reduce method

function isArmstrong2(num){
    const str = num.toString();

    const sum = [...str].reduce((acc, digit) => acc + digit**str.length, 0);

    return sum === num
}

console.log("isArmstrong2 370", isArmstrong2(370))