// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMarsY = 225000000;
var kilometersToTheMoonY = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    kilometersAway = kilometersToMarsY;
    var milesToMarsY = kilometersAway * milesPerKilometer;
    var hoursToMarsY = milesToMarsY / speedMph;
    var daysToMarsY = hoursToMarsY / 24;
    return daysToMarsY;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(spacecraftName + " will take " + getDaysToLocation(kilometersToMarsY) + " days to get to the moon.");
