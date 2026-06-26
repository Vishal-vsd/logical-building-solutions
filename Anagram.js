function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str1 = str1.split("").sort().join("");
  str2 = str2.toLowerCase();
  str2 = str2.split("").sort().join("");

  if (str1.length !== str2.length) return;

  return str1 === str2;
}

console.log("cat and act: ", isAnagram("cat", "act"));
console.log("bat and cat: ", isAnagram("bat", "cat"));

// function isAnagram2(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   let sum1 = 0;
//   let sum2 = 0;

//   for (let i = 0; i < str1.length; i++) {
//     if(str1[i] === " ") continue
//     sum1 = sum1 + str1.charCodeAt(i);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     if(str2[i] === " ") continue;
//     sum2 = sum2 + str2.charCodeAt(i);
//   }
//   return sum1 === sum2
// }

// console.log("b a t", "and", "a b t", isAnagram2("b a t", "a b t"));

function areAnagram(s1, s2) {
  if (typeof s1 !== "string" || typeof s2 !== "string") {
    throw new Error("Input element must be a valid string");
  }

  if (s1.length !== s2.length) {
    return false;
  }
  const charsInS1 = {};
  for (const char of s1) {
    // if (!charsInS1[char]) {
    //   charsInS1[char] = 0;
    // }
    // charsInS1[char] = charsInS1[char] + 1;

    charsInS1[char] = (charsInS1[char] || 0) + 1
  }
  console.log(charsInS1);

  const charsInS2 = {};
  for (const char of s2) {
    // if (!charsInS2[char]) {
    //   charsInS2[char] = 0;
    // }
    // charsInS2[char] = charsInS2[char] + 1;

    charsInS2[char] = (charsInS2[char] || 0) +1
  }
  console.log(charsInS2);

  for(let key in charsInS1){
    if(charsInS1[key] !== charsInS2[key]){
        return false
    }
  }

  return true;
}

console.log("pools spool", areAnagram("pools", "spool"));
console.log("vishal rajat", areAnagram("vishal", "rajat"));
