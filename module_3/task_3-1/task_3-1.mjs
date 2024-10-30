"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if(wakeUpTime === 7){
printOut("I woke up exactly 7 so i can take the bus to school")
}else if (wakeUpTime == 8) {
  printOut("I woke up at exactly 8 so can take the train to school.");
}
else { (wakeUpTime >8)
  printOut("i woke up later than 8 so i have to take the car to school")
}



printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tall = 3;

if (tall > 0) {
  printOut("Tallet er positiv")
  
}
else if(tall < 0) {
  printOut("Tallet er negativt")
}

else if (tall == 0) {
  printOut("Tallet er null")
  
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1;

printOut(`bilde størrelse: ${imageSize}`)

if (imageSize >= 4) {
  printOut("Takk Bildestørrelse er innenfor")
  
}

else {
  printOut("Bilde er for lite")
}
if (imageSize >= 6) {
  printOut("bildet er for stort")
  
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (imageSize >= 6) {
  printOut("bildet er for stort")
  
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  printOut(`Selected month: ${monthName}`);

  if (monthName.toLowerCase().includes("r")) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthIndex = Math.floor(Math.random() * noOfMonth);
const days = daysInMonth[monthIndex];

printOut(`Selected month: ${monthName}`);
printOut(`Number of days: ${days}`);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "March" || monthName === "Mai") {
  printOut("The gallery is closed for refurbishment.");
} else if (monthName === "April") {
  printOut("The gallery is open in temporary premises.");
} else {
  printOut("The gallery is open in its usual premises.");
}
printOut(newLine);
