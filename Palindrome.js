// let str = "madam";
// const reversedStr = str.split("").reverse().join("")

// console.log(reversedStr)

function isPalindrome(str){
    const reversedStr = str.split("").reverse().join("");
    if(str === reversedStr) return true;
    return false
}

console.log("madam", isPalindrome("madam"))


function isPalindrome2(str){
    for(i=0; i<=str.length/2; i++){
        if(str[i] !== str[str.length -1 -i]){
            return false
        }
        return true
    }
}

console.log("level", isPalindrome2("level"))


function isPalindrome3(str){
    str = str.toLowerCase()
    let start = 0;
    let end = str.length - 1
    for(start, end; start < end; start++, end--){
        if(str[start] !== str[end]){
            return false
        }
        return true
    }
}

console.log("truth", isPalindrome3("truth"))