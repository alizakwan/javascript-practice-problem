// Write a program that prints a multiplication table for numbers up to 12.

var readlineSync = require("readline-sync");
var input = readlineSync.question("May i have a number: ");
var no = parseInt(input);
if (isNaN(no)) {
  console.log("Please enter valid number!");
} else {
  for (var i = 1; i <= 12; i = i + 1) {
    var multiplication = no * i;
    console.log(multiplication);
  }
}
