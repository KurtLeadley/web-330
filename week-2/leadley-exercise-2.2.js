/***********************************
; Title:  leadley-exercise-2.2.js
; Author: Kurt Leadley, Richard Krasso
; Date:   10 August 2019
; Description: Prototype Design Pattern
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-2.2.js");
console.log(outputHeader);
console.log('');

// create an object literal. This is the prototype that our other person object will inherit
var person = {
  // The getAge property value is a function that returns this persons age
  getAge:function() {
    return this.age;
  }
};

// creating a new object and passing in person (which is passing in the getAge function)
// The first argument in Object.create is the prototype, the second is any other properties you wish to define
var kurt = Object.create(person, {
  "age":
    {
      "value":34
    } ,
  "fullname":
    {
      "value":"Kurt Leadley"
    }
});
// get the values and log them
var myName = kurt.fullname;
var myAge = kurt.getAge();
console.log("The person's full name is: " + myName);
console.log("The person's age is: " + myAge);
