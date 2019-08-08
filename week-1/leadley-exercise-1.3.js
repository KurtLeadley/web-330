/***********************************
; Title:  leadley-exercise-1.3.js
; Author: Professor Krasso
; Modified by Kurt Leadley
; Date:   8 August 2019
; Description: Class refresher
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-1.3.js");
console.log(outputHeader);
console.log('');

// function to create a CellPhone object
function CellPhone(manufacturer, model, color, price) {
  // whatever is passed into this CellPhone constructor will be these properties
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
  // two get functions to return the price and model when needed
  this.getPrice = function() {
    return this.price;
  }
  this.getModel = function() {
    return this.model;
  }
  // function to display all of the cell phones property values
  this.getDetails = function() {
    console.log('-- DISPLAYING CELL PHONE DETAILS --');
    console.log('Manufacturer: ' + this.manufacturer);
    console.log('Model: ' + this.getModel());
    console.log('Color: ' + this.color);
    console.log('Price: ' + this.getPrice());
  }
}
// make new cell phone object with the Cellphone constructor
var newCellPhone = new CellPhone('Moto','G6','Blue','159.99');
// calling getDetails to output result of new cell phone object
newCellPhone.getDetails();



