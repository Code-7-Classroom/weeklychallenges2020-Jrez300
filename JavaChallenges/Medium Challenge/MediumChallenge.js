// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

var person = prompt("Speak to me!")

if (person == person.toUpperCase()) {
    console.log('Person is YELLING!');
}
else if (person == person.toLowerCase()) {
    console.log('Person is Whispering')
}
else {
    console.log('Person is talking normal')
}