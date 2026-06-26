function checkAlphaOrder(str) {
  str = str.toLowerCase();
  const isAlphabetical = str.split("").sort().join("");

  return str === isAlphabetical;
}

console.log(checkAlphaOrder("vishal"));
console.log(checkAlphaOrder("abcdef"));

function checkAlphaOrder2(str) {
  str = str.toLowerCase();
  str = str.replace(/ /g, "");
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(checkAlphaOrder2("vishal"));
console.log(checkAlphaOrder2("abcdef"));
