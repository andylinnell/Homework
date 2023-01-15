// 1.Create a function which returns the number of true values there are in an array.
const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

function addTrues (testArray) {
    let trueCount = 0;
    for (let i = 0 ; i < testArray.length ; i++){
        if (testArray[i] == true) {
            trueCount++;
        }
    }
    return trueCount;

}
console.log(addTrues(testArray));


// 2. Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both.
let fruits = ["apples", "oranges", "bananas"]
let vegetables = ["carrots", "broccoli", "squash"]

function combineTwoArrays (arrayOne, arrayTwo){
    
    combinedArray = [...arrayOne, ...arrayTwo];
    
    return combinedArray;
}
console.log(combineTwoArrays(fruits,vegetables))


// 3. You are given 2 arrays, one called shoppingList and one called cart.
// Example:
    let shoppingList = ['beer', 'milk', 'wine', 'bananas', 'sugar']
    let cart = ['milk', 'beer']
// Create a new version of shoppingList where the items in the cart have been removed.
function removeItems (shoppingList) {
    let newList = shoppingList.splice(0,2);
    return shoppingList;
}
console.log(removeItems(shoppingList))

