function area(l,b){
if(l <= 0){
    throw new RangeError("Length should be a positive number")
}
if(b <= 0){
    throw new RangeError("Breadth should be a positive number")
}
    const area = l*b;
    console.log("Area of a rectangle is",area)
}

area(10,20)
area(2.3,2)
area(2, 0)
// area(-2,3)