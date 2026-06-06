function smallestNumber(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    if (a < b && a < c) {
      return a;
    } else if (b < a && b < c) {
      return b;
    } else if (c < a && c < b) {
      return c;
    }
    return a;
  } else {
    throw new TypeError("all three should be numbers");
  }
}

// function smallestNumber2(a,b,c){
//   let smallestNumber = a;
//   if(b < smallestNumber){
//     smallestNumber =b
//   }
//   if(c<smallestNumber) {
//     smallestNumber=c
//   }
//   return smallestNumber;
// }

console.log(smallestNumber(10, 20, 30));
// console.log(smallestNumber(0, 30, 450));
console.log(smallestNumber(-3, 0, 59));
console.log(smallestNumber(-40, -5, 70));

console.log(smallestNumber(1, 1, 1));
// console.log(smallestNumber(1, 1, 0));
console.log(smallestNumber(1, 1, 4));

// console.log(smallestNumber2(10, 20, 30));
// console.log(smallestNumber2(0, 30, 450));
// console.log(smallestNumber2(-3, 0, 59));
// console.log(smallestNumber2(-40, -5, 70));

// console.log(smallestNumber2(1, 1, 1))
// console.log(smallestNumber2(1, 1, 0));
// console.log(smallestNumber2(1, 1, 4));

console.log(smallestNumber(3, 4, 5));
console.log(smallestNumber("4", 6, 70));

// robust validation

function smallAmongThree(a, b, c) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    throw new TypeError("All values must be valid numbers.");
  }

  return Math.min(a, b, c);
}
