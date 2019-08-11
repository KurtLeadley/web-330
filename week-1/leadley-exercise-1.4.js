/***********************************
; Title:  leadley-exercise-1.4.js
; Author: Kurt Leadley, Richard Krasso
; Date:   10 August 2019
; Description: Duck typing
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-1.4.js");
console.log(outputHeader);
console.log('');

// creating class constructors for making vehicle objects
function Car(model) {
    this.model = model;
}
function Truck(model,year) {
    this.model = model;
    this.year = year;
}
function Jeep(model,year,color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
// Create a prototype method for the each vehicle class that will alert when 
// a vehicle of that is added to the race
Car.prototype.start = function() {
    console.log('Car added to the racetrack!');
}
// Create a prototype method for the truck class that will alert when 
// a truck is added to the race
Truck.prototype.start = function() {
    console.log('Truck added to the racetrack!');
}
// Create a prototype method for the jeep class that will alert when 
// a jeep is added to the race
Jeep.prototype.start = function() {
    console.log('Jeep added to the racetrack!');
}

// create an empty array that will eventually keep track of all the 
// vehicles in the race
var racetrackArray = [];

// create a function to pass a vehicle into. 
// Add the vehicle to the racetrack and add it to the racetrackArray
function driveIt(vehicle) {
    vehicle.start();
    racetrackArray.push(vehicle);
}

// create vehicle objects for each class (car,truck,jeep)
var wrx = new Car('WRX');
var fordTruck = new Truck('F150',2019);
var wrangler= new Jeep('Wrangler',2019,'silver');

// call the drive it function to add the vehicles to the race
driveIt(wrx);
driveIt(fordTruck);
driveIt(wrangler);

console.log('');
console.log("--The following vehicles have been added to the racetrack--");

// loop through the racetrack array that was populated in the driveIt function
// and display the vehicle class and model 
for (var i = 0; i < racetrackArray.length; i++) {
    console.log(racetrackArray[i].constructor.name+': '+ racetrackArray[i].model);
}
