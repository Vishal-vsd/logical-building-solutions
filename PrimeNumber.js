function isPrimeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }
  if (num <= 1) {
    throw new Error("input must be greater than 1");
  }
  let result = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

// 3 - 1,3
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));
console.log(isPrimeNumber(53));

function isPrimeNumber2(num) {
  let result = true;

  if (num === 2) {
    result = true;
  } else if (num % 2 === 0) {
    return false;
  }
  if (result) {
    for (let i = 3; i < num; i = i + 2) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }
  }

  return result;
}

console.log("64", isPrimeNumber2(64));
console.log("61", isPrimeNumber2(61));
console.log("2", isPrimeNumber2(2));

function removeDuplicates(nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

console.log(removeDuplicates([1,1,2,2, 3,4, 4]))