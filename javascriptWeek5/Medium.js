// MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2
let myArray = [1.5, 3, 2.5, 1];



let sumNum = ()  =>  myArray.reduce((a,b ) => a + b, 0) 

let avgNum = ()  =>  sumNum() / myArray.length

// avgNum = function(myArray){
//     return myArray.reduce(function(a,b){
//         return a + b
//     }, 0)
// }

console.log(avgNum())