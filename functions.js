// 1. Write a function that adds two numbers together 
// 2. Write a function that returns the square of a number
// 3. Create an object called student and add 3 properties with their values

// 1.

function addNumbers(x,y) {
    let sum = x + y;
    return sum;
}

console.log(addNumbers(13,27));

// 2.

function squareRoot(x) {
   let sqrRt = Math.sqrt(x);
   return sqrRt;
}

console.log(squareRoot(81));

// 3.

const student = {
    firstName: "andy",
    lastName: "linnell",
    gender: "male"
}

console.log(student);
