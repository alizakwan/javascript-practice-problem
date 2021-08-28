var readlineSync = require("readline-sync");

var username = readlineSync.question("May I have your name: ");
var lowerCaseUsername = username.toLowerCase()
if (lowerCaseUsername === "alice" || lowerCaseUsername === "bob") {
  console.log("welcome " + lowerCaseUsername);
} else {
  console.log(lowerCaseUsername);
}
