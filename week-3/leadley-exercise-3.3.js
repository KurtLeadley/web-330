/***********************************
; Title:  leadley-exercise-3.3.js
; Author: Richard Krasso
; Modified by: Kurt Leadley
; Date:   22 August 2019
; Description: Singleton Design Pattern
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-3.3.js");
console.log(outputHeader);
console.log('');

// create a singleton with an immediately invoked function expression
var DatabaseSingleton = (function() {
  var instance;
  // create a new object
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  // this return will let us access the createInstance function with getInstance
  return {
    getInstance: function() {
      // create an instance if it doesn't already exist
      if (!instance) {
        instance = createInstance();
      }
    return instance;
    }
  }
})();

// create a function to test if each object if of the same class instance
function databaseSingletonTest() {
  // since getInstance is returned in our singleton pattern , we can access it easily like so:
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();
  // strict test, will return true or false
  var trueOrFalse = (oracle === postgres);
  console.log('Same database instance? ' +  trueOrFalse);
}
// call our function to log the result
databaseSingletonTest();
