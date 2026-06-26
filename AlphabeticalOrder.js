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

function isAlphabetical(str){
    str = str.toLowerCase();

    let prev = "";

    for (const char of str) {
        if(char === " ") continue;

        if(prev && char < prev){
            return false;
        }

        prev = char
    }
    return true;
}

console.log("v i s h a l",isAlphabetical("v i s h a l"))
console.log("a b c d e",isAlphabetical("a b c d e"))