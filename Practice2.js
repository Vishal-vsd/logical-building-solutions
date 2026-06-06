// Array plus sort
function smallestNumber(a, b, c) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    throw new TypeError("All three should be numbers.");
  }
  const numbers = [a, b, c];
  numbers.sort((x, y) => x - y);

  console.log(numbers[0]);
}

smallestNumber(10, 2, 6);

// if else
function smallestNumber2(a, b, c) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    throw new TypeError("All three should be numbers.");
  }

  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  else if (c < a && c < b) return c;
  else return a;
}

console.log(smallestNumber2(-1, -50, 29));
console.log(smallestNumber2(1, 1, 29));
console.log(smallestNumber2(5, 5, 1));
console.log(smallestNumber2(2, 2, 2));


// Ternary Operator
function smallestNumber3(a, b, c) {
  return a < b ? (a < c ? a : c) : b < c ? b : c;
}
console.log(smallestNumber3(-1, -50, 29));
console.log(smallestNumber3(1, 1, 29));
console.log(smallestNumber3(5, 5, 1));
console.log(smallestNumber3(2, 2, 2));


// Array + Reduce
function smallestNumber4(a, b, c) {
  return [a, b, c].reduce((smallest, current) =>
    current < smallest ? current : smallest,
  );
}

console.log(smallestNumber4(-6, -50, 29));
console.log(smallestNumber4(12, 11, 29));
console.log(smallestNumber4(52, 55, 51));
console.log(smallestNumber4(20, 20, 20));
