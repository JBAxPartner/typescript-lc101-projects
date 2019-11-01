// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMarsY: number = 225000000;
let kilometersToTheMoonY: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway: number): number {
    kilometersAway = kilometersToMarsY;
    let milesToMarsY: number = kilometersAway * milesPerKilometer;
    let hoursToMarsY: number = milesToMarsY / speedMph;
    let daysToMarsY: number = hoursToMarsY / 24;
    return daysToMarsY;
}

// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMarsY)} days to get to the moon.`);

