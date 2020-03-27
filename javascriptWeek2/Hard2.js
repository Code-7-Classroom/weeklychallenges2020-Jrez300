// HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 lbs
// Jerry - 	height: 10cm 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//  BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s.Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). 


// Metric BMI Formula
// BMI = weight (kg) / [height (m)]2

// Imperial BMI Formula
// BMI = 703 × weight (lbs) / [height (in)]2


var tomHeight = 9 // inches
var tomMass = 8 //lbs
var jerryHeight = 10 / 100 //convert cm into meters = .1
var jerryMass = 45 / 1000 //convert grams to kilograms = .045
var jerryBMI = metricBMI (jerryHeight, jerryMass)
var tomBMI = imperialBMI (tomHeight, tomMass)
Boolean = (tomBMI > jerryBMI)

function metricBMI (jerryHeight, jerryMass){

    return jerryMass / (jerryHeight * jerryHeight);
}
console.log(" Jerrys BMI is " + jerryBMI)

function imperialBMI (tomHeight, tomMass) {
    return 703 * (tomMass / (tomHeight * tomHeight)) ;
}
console.log(" Toms BMI is " + tomBMI)

if (tomBMI > jerryBMI) {[
    console.log(" Is Tom's BMI higher than Jerry's? " + Boolean )
]} 