// let pattern = ""
// for(i=1; i<=5; i++){
//     let pattern = "";
//     for(j=1; j<=i; j++){
//         pattern += "*"
//     }
//     console.log(pattern)
// }

for (i = 1; i <= 5; i++) {
  let pattern = "";
  for (j = 1; j <= 5 - i; j++) {
    pattern += "1 ";
    for (k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }
  }
  console.log(pattern);
}
