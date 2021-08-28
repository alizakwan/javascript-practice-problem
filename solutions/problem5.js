//  [Write a program that ask user for his age and prints whether he is eligibal for voting  ]

var readlinesync = require("readline-sync");

var no = parseInt(readlinesync.question("May i have your age "));
if (isNaN(no)) {
  console.log("Please enter valid number!");
} else {
  console.log("You've entered: " + no);
  if (no >= 18) {
    console.log("You are eligible");
  } else {
    console.log("You are not eligible");
  }
}

