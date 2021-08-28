// Write a program that asks the user for their name and greets them with their name.

var readlineSync = require('readline-sync');
 
var username = readlineSync.question("May I have your name: ");
console.log("Welcome " + username)
