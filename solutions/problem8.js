// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

var readlineSync = require("readline-sync");
var input = readlineSync.question("May i have a number ");
var no = parseInt(input);
if (isNaN(no)) {
  console.log("Please enter a number");
} else {
  var sum = 0;
  for (var i = 1; i <= no; i = i + 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
