// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

var run = exercise('running');
var swim = exercise('swimming');

function exercise(string) {

    var x = 'Today\'s excercise:';
    // the first call returns a function and the second call gives the result.
return function(){ 
if (string === 'running'){
    console.log(x + 'running');
}
else if (string === 'swimming'){
    console.log(x + 'swing')
} 
}
}
console.log(run());
console.log(swim());

