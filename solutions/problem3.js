// Modify the previous program such that only the users Alice and Bob are greeted with their names.

var readlineSync = require("readline-sync");

var username = readlineSync.question("May I have your name: ");
var lowerCaseUsername = username.toLowerCase()
if (lowerCaseUsername === "alice" || lowerCaseUsername === "bob") {
  console.log("welcome " + lowerCaseUsername);
} else {
  console.log(lowerCaseUsername);
}
