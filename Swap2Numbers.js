// let a = 6;
// let b = 10;

// console.log(`value before swapping a=${a} and b=${b}`);

// let c = b;
// b = a;
// a = c;

// console.log(`value after swapping a=${a} and b=${b}`)

function swap2Numbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  return { a, b };
}

console.log(swap2Numbers(4, 5));

function swap2Numbers1(a, b) {
  return ([a, b] = [b, a]);
}

console.log(swap2Numbers1(1, 9));
