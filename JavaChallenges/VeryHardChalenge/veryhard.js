// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

var number1 = parseInt(prompt('Type a number'))
var functions = prompt("Type a Function(+,-,*,/)")
var number2 = parseInt(prompt("type a second number"))


if (functions == '+') {
    var addNumbers = addition(number1, number2);

function addition(number1, number2) {
    return number1 + number2;
    
}
console.log(number1 + functions + number2 + '=' + addNumbers)
}

else if (functions == '-') {
    var addNumbers = subtraction(number1, number2);

function subtraction(number1, number2) {
    return number1 - number2;
    
}
console.log( number1 + functions + number2 + '=' + addNumbers)
}

if (functions == '*') {
    var addNumbers = multiply(number1, number2);

function multiply(number1, number2) {
    return number1 * number2;
    
}
console.log(number1 + functions + number2 + '=' + addNumbers)
}

if (functions == '/') {
    var addNumbers = divide(number1, number2);

function divide(number1, number2) {
    return number1 / number2;
    
}
console.log( number1 + functions + number2 + '=' + addNumbers)
}