// VERY HARD: Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string. Output the first character in a string that is unique.
// Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
// Input: “this hat is the greatest!”  Output: “g”
// Input: “what a wonderful day it has been!”  Output: “o”

var message = "the quick brown fox jumps over the calm kitten quietly";



function occurrence(){
    var splitString = message.split('');
    for (i = 0; i < splitString.length; i++){
if (splitString.indexOf[i] === 1){
return i
}
}
}
console.log(occurrence(message))
