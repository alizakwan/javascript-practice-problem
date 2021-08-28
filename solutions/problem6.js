// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

var readlineSync = require("readline-sync");
var input = readlineSync.question("May i have a number: ");
var no = parseInt(input);
if (isNaN(no)) {
  console.log("Please enter valid number!");
} else {
  var operations = ["sum", "product"];
  var operation = readlineSync.keyInSelect(operations, "Select Operation");
  if (operations[operation] === "sum") {
    var sum = 0;
    for (var i = 1; i <= no; i = i + 1) {
      sum = sum + i;
    }
    console.log(sum);
  } else {
    var product = 1;
    for (var i = 1; i <= no; i++) {
      product = product * i;
    }
    console.log(product);
  }
}
