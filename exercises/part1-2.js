// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Add the 5 variables here
var spaceCraftName = 'Determination';
var speedMphX = 17500;
var kilometersToMarsX = 225000000;
var kilometersToTheMoonX = 384400;
var milesPerKilometerX = 0.621;
// Code part 2 here:
var milesToMars = kilometersToMarsX * milesPerKilometerX;
var hoursToMars = milesToMars / speedMphX;
var daysToMars = hoursToMars / 24;
// Code the output statement here (use a template literal):
console.log(spaceCraftName + " will take " + daysToMars + " to get to Mars.");
