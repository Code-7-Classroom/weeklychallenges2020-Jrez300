//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

var monthNumber = parseInt(prompt("Enter Month Number"));

var Month = 
["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (monthNumber === 1) {
    console.log("The Number you entered is " + Month[0])
}
else if (monthNumber === 2) {
    console.log("The Number you entered is " + Month[1])
}
else if (monthNumber === 3) {
    console.log("The Number you entered is " + Month[2])
}
else if (monthNumber === 4) {
    console.log("The Number you entered is " + Month[3])
}
else if (monthNumber === 5) {
    console.log("The Number you entered is " + Month[4])
}
else if (monthNumber === 6) {
    console.log("The Number you entered is " + Month[5])
}
else if (monthNumber === 7) {
    console.log("The Number you entered is " + Month[6])
}
else if (monthNumber === 8) {
    console.log("The Number you entered is " + Month[7])
}
else if (monthNumber === 9) {
    console.log("The Number you entered is " + Month[8])
}
else if (monthNumber === 10) {
    console.log("The Number you entered is " + Month[9])
}
else if (monthNumber === 11) {
    console.log("The Number you entered is " + Month[10])
}
else if (monthNumber === 12) {
    console.log("The Number you entered is " + Month[11])
}
else if (monthNumber < 1 || monthNumber > 12) {
    console.log("The Number you entered is Invalid")
}
    


