// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here
let spaceCraftName: string = 'Determination';
let speedMphX: number = 17500;
let kilometersToMarsX: number = 225000000;
let kilometersToTheMoonX: number = 384400;
let milesPerKilometerX: number = 0.621;

// Code part 2 here:
let milesToMars: number = kilometersToMarsX * milesPerKilometerX;
let hoursToMars: number = milesToMars / speedMphX;
let daysToMars: number = hoursToMars / 24;

// Code the output statement here (use a template literal):
console.log(`${spaceCraftName} will take ${daysToMars} to get to Mars.`);
