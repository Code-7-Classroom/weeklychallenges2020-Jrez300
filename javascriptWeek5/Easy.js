// EASY: Using ES6 syntax, write a function that takes in an array of numbers and outputs the maximum number.
// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3




MaxNumber = ()  => {
    let myArray = [3, 6, 4, 5, 2, 1];
    
    return Math.max(...myArray)

};
console.log(MaxNumber())