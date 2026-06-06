function countCharacters(str) {
  if (typeof str !== "string") {
    throw new Error("Only strings are allowed");
  }
  let result = {};
  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

console.log(countCharacters("Sanskriti"));

function countCharacters2(str) {
  if (typeof str !== "string") {
    throw new Error("Only strings are allowed");
  }
  let result = {};
  for(i=0; i<=str.length - 1; i++){
    result[str[i]]= (result[str[i]] || 0) + 1
  }
  return result
}

console.log(countCharacters2("vishal"))



let array = [30,49,36];
console.log(...array, array)