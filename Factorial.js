function factorial(num) {
  if (!Number.isFinite(num) || num < 0) {
    throw new TypeError("Only numbers are allowed");
  }

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

// console.log("0! is", factorial(0));
// console.log("6! is", factorial(6));
// console.log("1! is", factorial(1));

// recursion
function calculateFactorial(num) {
    console.log("num is", num)
  if (!Number.isFinite(num) || num < 0) {
    throw new TypeError("Only numbers are allowed");
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  return num * calculateFactorial(num - 1);

  //return 4 * calculateFactorial(3); 4*6
  //return 3 * calculateFactorial(2); 3*2
  //return 2 * calculateFactorial(1); 2*1

}

// console.log("0! is", calculateFactorial(0));
console.log("6! is", calculateFactorial(6));
// console.log("1! is", calculateFactorial(1));