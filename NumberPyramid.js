function generatePyramid(inputNum) {
  if (!Number.isInteger(inputNum)) {
    throw new Error("Input number must be an integer");
  }

  for (let i = 1; i <= inputNum; i++) {
    let lineContent = "";

    for (let space = 1; space <= inputNum - i; space++) {
      lineContent = lineContent + " ";
    }
    
    for(let count = 1; count <= i; count++){
        lineContent = lineContent + count
    }

    for(let reverseCount = i-1; reverseCount >= 1; reverseCount--){
        lineContent = lineContent + reverseCount
    }

    console.log(lineContent)
  }
}

generatePyramid(10);
