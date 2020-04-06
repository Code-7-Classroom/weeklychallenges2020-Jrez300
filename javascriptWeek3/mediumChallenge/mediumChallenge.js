// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                
// prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
// prints "Each person gets 2.67 slices of pizza"

var sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(b){
    
    return function(a){
        var total = b/a
		
		console.log( "Each person gets " + total + " slices of pizza");
	}
}

// sharePizza will be equal to whatever cutPizzaSlices returns.
// cutPizzaSlices returns a function, so sharePizza becomes that inner function. 

console.log(sharePizza(2));          
console.log(sharePizza(3));                                                
