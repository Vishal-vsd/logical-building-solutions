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

console.log(countCharacters("yourname"));

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


function charCount(str) {
  str = str.toLowerCase()
  let result = {}
  for (const char of str) {
    result[char] = (result[char] || 0) + 1
  }

  return result;
}

console.log(charCount("Vishal Dhiman"))


const myObject = {};
myObject.a = 1;
myObject["b"] = 2;
console.log(myObject)


function countCharacters4(str){
  str = str.toLowerCase();
  const splittedstr = str.split("");
  const result = splittedstr.reduce((acc, char)=> {
    if(!acc[char]){
      acc[char] = 0;
    }
    acc[char] = acc[char] + 1;

    return acc;
  }, {})

  console.log("Accumulator is", result)
}

countCharacters4("Sanskriti")