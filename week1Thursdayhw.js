const clog = (label,log) => {
    console.log(`${label}: ${log}`);
}

//1. Create a function that takes an array of numbers and returns a new array with the square of each number.
for(let i = 10 ; i > 0; i--){
    console.log(i,);
}
console.log("~~blast off!!~~");

//2. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score. Console.log the results.

const pointsMade = (twoPoints,threePoints) => {
    let pointsTotal = (twoPoints*2) + (threePoints*3)
    return pointsTotal

}    
clog("Total points made", pointsMade(20,6))

//3. Create a function that converts a string to uppercase letters. Console.log the results.

const upperCase = (string) => {
    console.log(string.toUpperCase())
    return string
}

upperCase("this is a string")