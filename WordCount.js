function countWords(sentence){
    sentence = sentence.split(' ');
    sentence = sentence.trim()

    const nonEmptyElemnets = sentence.filter((element) => element !== "")
    console.log(nonEmptyElemnets)
    console.log(sentence.length)
}

countWords("My name   is   Alex")
countWords("you are my younger brother")