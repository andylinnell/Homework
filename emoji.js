// 1. Using your loop of choice. Create a function that prints the pyramid below. (Show your personality by using your favorite emoji)

// function pyramid (n){
//     let emoji = " "
//     for (let i = 1; i <= n; i++){
//         for (let j = 1; j <= i; j++){
//             emoji += "*"
//   }
//    emoji += "\n"
// }
// }

let n = 5;
let emoji = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    emoji += "*";
  }
  emoji += "\n";
}
console.log(emoji);


// console.log(pyramid(5));
/* 2. Create a function that removes the first element of the array below and adds “kiwi” to the end of the array
let favoriteFruits = [“mango”, “lychee”, “rambutan”, “papaya”] */ 
favoriteFruits = ["mango","lychee", "rambutan", "papaya"]

function removeElements(favoriteFruits) {

    favoriteFruits.shift();
    favoriteFruits.unshift("kiwi");

}
console.log(removeElements(favoriteFruits)); 

