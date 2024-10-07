"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const x = 2 + 3 * (2 - 4) * 6;
printOut("2 + 3 * 2 - 4 * 6 = " + x.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meter = 25.34
let mm = 25.4
mm = mm / 1000
const Inches = meter / mm;
const exactInches = Inches.toFixed(2);
printOut("Inches = " + exactInches.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part2_Answer =
(3 * hoursInDay * minutesInHour) +
(12 * minutesInHour) +
14 +
(45 / secondsInMinute);

printOut("part2_Answer = " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc)
printOut("Minutes = " + part4_Minutes)


part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_seconds = Math.floor(part4_Calc)
printOut("Seconds = " + part4_seconds)
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut( amountUSD + " dollar is " + amountNOK + " kroner");
amountUSD = Math.round(amountNOK * USD);
printOut( amountNOK + " kroner is " + amountUSD + " dollars");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text*/

let text = "There is much between heaven and earth that we do not understand."
let length = text.length;
printOut("the text has " + length + " characters");
let char = text.charAt(19);
printOut("the 19th letter is " + char);
let sub = text.substring(34,44);
printOut("characters from position 35 and 8 forward is " + sub);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const number1 = 5;
const number2 = 3;
if (number1 > number2) {
    printOut("5 > 3 = true!")
} else if (number1 < number2)
printOut("5 < 3 = False!")

const number3 = 7;
const number4 = 7;
if (number3 == number4) {
    printOut("7 == 7 = True!");
    
} else if (number3 > number4) {
    printOut("7 > 7 = False!");
    
}

const tall1 = "a" > "b"
printOut(tall1.toString());

if ("1" < "a") {
    printOut("True!")
}
else if ("1" > "a") {
    printOut("False!")
    
}
if ("2500" < "abcd") {
    printOut("True!")
    
}
else if ("2500" > "abcd") {
    printOut("false!")
}
if ("arne" !== "thomas") {
    printOut("True!")
    
}
else if ("arne" == "thomas") {
    printOut("False!")
    
}

if ("5" == "2") {
    printOut("5 equals 2")
    
}
else if ("5" !== "2") {
    printOut("5 does bot equal 2")
    
}

if ("abcd" > "bcd") {
    printOut("abcd is greater than bcd!")
    
}
else if ("abcd" < "bcd") {
    printOut("abcd is lesser than bcd!")
    
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const num1 = Number("254");
const num2 = parseFloat("57.23");
const num3 = parseInt("25 kroner");

printOut(num1.toString());

printOut(num2.toString());

printOut(num3.toString());

"this is an easter egg 𓎥"
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r= Math.floor(Math.random(360))+1;
printOut("Random number = "+ r.toString());
printOut(r.toString())
printOut(newLine);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totaldays= 131
let weeks= Math.floor(totaldays/7)
let days= totaldays%7
printOut(weeks + " Weeks and " +  days  + " days") 

printOut(newLine);