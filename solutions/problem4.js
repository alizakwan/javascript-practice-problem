// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

var readlineSync = require("readline-sync");
var input = readlineSync.question("May i have a number: ");
var no = parseInt(input);
if (isNaN(no)) {
  console.log("Please enter valid number!");
} else {
  var sum = 0;
  for (var i = 1; i <= no; i = i + 1) {
    sum = sum + i;
  }
  console.log(sum);
}
