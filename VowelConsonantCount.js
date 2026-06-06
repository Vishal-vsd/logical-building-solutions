function countVowelsAndConsonants(str){
    str = str.toLowerCase()
    str = str.replace(/ /g, "");

    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz"

    let vowelCount = 0;
    let consonantCount = 0;

    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            vowelCount++
        }
        else if(consonants.includes(str[i])){
            consonantCount++
        }
    }

    return {vowelCount, consonantCount}

}

console.log(countVowelsAndConsonants("Hello World"))
console.log(countVowelsAndConsonants("Vishal Dhiman"))