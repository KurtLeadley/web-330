/***********************************
; Title:  leadley-exercise-3.2.js
; Author: Richard Krasso
; Modified by: Kurt Leadley
; Date:   22 August 2019
; Description: Factory Design Pattern
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-3.2.js");
console.log(outputHeader);
console.log('');

// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7
}

// constructor function for Oracle, pass in an array argument, give default values if argument not passed
function Oracle(properties) {
  this.username = properties.username || "kurt_oracle";
  this.password = properties.password || "password";
  this.server = properties.server || "localhost:3000";
  this.version = properties.version || "12.2.0.1";
}

// constructor function for Informix, pass an array argument, give default values if argument not passed
function Informix(properties) {
  this.username = properties.username || "kurt_informix";
  this.password = properties.password || "12345";
  this.server = properties.server || "localhost:3030";
}

// a skeleton database factory / empty class constructor function
function DatabaseFactory() {};

// assign a prototype property named databaseClass and give a default value of Oracle for our DatabaseFactory
DatabaseFactory.prototype.databaseClass = Oracle;
// create another DatabaseFactory prototype property named createDatabase, determine the database class
DatabaseFactory.prototype.createDatabase = function(properties) {
  // assign the databaseClass based on these if tests
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }
  // this will return "new Oracle(properties)" , "new Informix(properties)" based on databaseType
  return new this.databaseClass(properties);
}

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});


// lets use the factory builder to make a factory
var oracleFactory = new DatabaseFactory();
// oracleFactory can now access DatabaseFactory prototypes
// create an oracle object using our createDatabase prototype from our DatabaseFactory
var oracle = oracleFactory.createDatabase({
  databaseType:'Oracle',
  username:'kurt_admin',
  password:'123ABC',
  server: 'localhost:8080',
  version: '1.0.2'
});

// create an informix factory and informix database object
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType:'Informix',
  username:'kurt_admin_informix',
  password:'ABCDEFG',
  server:'localhost:3000'
});
// get the constructor name, pretty print our object and console.log it
console.log(oracle.constructor.name + ' ' + JSON.stringify(oracle,null,4));
console.log(informix.constructor.name +' '+ JSON.stringify(informix,null,4));
