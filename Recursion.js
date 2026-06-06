// it is a problem solving technique 
// a fucntion calls itself with a smaller similar problem
// problem is divided into smaller problems
// result of smaller problem is used to solve the real problem

// example - factorial of a number, 

function calculateFactorial(num){
    if( num < 0 || !Number.isFinite(num) ){
        throw new Error("Only numbers are allowed")
    }
    let result = 1;
    let i= 1
    while (i<=num) {
        result*=i;
        i++;
    }
    return result;
}

console.log(calculateFactorial(0))

function factorialByRecursion(num){
    if(num === 0) return 1;
    if(!Number.isFinite(num)){
        throw new Error("Only numbers are allowed");
    }
    return num * factorialByRecursion(num-1)
}

console.log(factorialByRecursion(5));

// Limitations of recursion
// stack overflow error - infinite loop
// complex and less readable
// try to solve with loop instead of recursion