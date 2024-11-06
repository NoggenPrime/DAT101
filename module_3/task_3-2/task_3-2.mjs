"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/
printOut("Replace this with you answer!");
let line1 = "";
for (let i = 1; i <= 10; i++) {
  line1 += i + " ";
}
printOut(line1);

let line2 = "";
for (let i = 10; i >= 1; i--) {
  line2 += i + " ";
}
printOut(line2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const answerNumber = 45;
let guessNumber = 0; 
while(answerNumber !== guessNumber){
guessNumber = Math.ceil(Math.random() * 60);
}
printOut("Guess Number = " + guessNumber.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while(answerNumber !== guessNumber){
    guessCount++;
 guessNumber = Math.ceil(Math.random() * 1000000);
}
const endTime = Date.now();
const timeUsed = endTime - startTime;

printOut("Antall gjetninger " + guessCount + " tok " + timeUsed.toString() + " millisekunder ");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
for (let number = 2; number < 200; number++) {
  let isPrime = true;
  let divider = 2;
  while (divider < number) {
    if (number % divider === 0) {
      isPrime = false;
      break;
    }
    divider++;
  }
  if (isPrime) {
    printOut(number + " ");
  }
}
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


for (let row = 1; row <= 7; row++) {
  let rowText = "";
    for (let column = 1; column <= 9; column++) {
      rowText += "K" + column + "R" + row + " ";
    }
    printOut(rowText);
}

/*
Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
*/

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40% */

printOut("Replace this with you answer!");
for (let i = 0; i < 5; i++) {
  // Generate a random grade between 1 and 236
  let grade = Math.floor(Math.random() * 236) + 1;
  
  // Calculate the percentage
  let percentage = (grade / 236) * 100;

  // Determine the letter grade
  let letterGrade;
  if (percentage >= 89) {
    letterGrade = 'A';
  } else if (percentage >= 77) {
    letterGrade = 'B';
  } else if (percentage >= 65) {
    letterGrade = 'C';
  } else if (percentage >= 53) {
    letterGrade = 'D';
  } else if (percentage >= 41) {
    letterGrade = 'E';
  } else {
    letterGrade = 'F';
  }

  // Output the result
  printOut(`Student ${i + 1}: Grade = ${grade}, Percentage = ${percentage.toFixed(2)}%, Letter Grade = ${letterGrade}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("● Dice Rolling Extravaganza");

const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

//diceThrow = "3,3,3,3,3,3";

printOut("diceThrow: " + diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString();
printOut("diceCount: " + diceCount);

const equals1 = (diceCount.match(/1/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;
printOut("equals1: " + equals1.toString());
printOut("equals6: " + equals6.toString());

if(equals1 === 6){
  printOut("Full straight");
}else if(equals6 === 1){
  printOut("Yatzy!!!");
}
printOut(newLine);

