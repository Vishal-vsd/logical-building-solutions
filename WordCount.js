function countWords(sentence){
    sentence = sentence.split(' ');

    const nonEmptyElemnets = sentence.filter((element) => element !== "")
    console.log(nonEmptyElemnets)
    console.log(sentence.length)
}

countWords("My name   is   Alex")
countWords("you are my younger brother")