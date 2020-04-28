// VERY HARD: Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string. Output the first character in a string that is unique.
// Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
// Input: “this hat is the greatest!”  Output: “g”
// Input: “what a wonderful day it has been!”  Output: “o”

// var message = "the quick brown fox jumps over the calm kitten quietly";

 
function occurrence(message){
var splitString = message.split('');
for (var i = 0; i < splitString.length; i++){
    var char = splitString[i]

    if (splitString.indexOf(char) == splitString.lastIndexOf(char)){
        return char;
    }
    
}
}


console.log(occurrence("abbath"))
