"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".
*/
function printTodayInNorwegian() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString("no-NB", {
      weekday: 'long',  // Include day of the week
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    printOut(`Dagens dato: ${norwegianDate}`);
  }
  
  // Run Part 1 function
  printTodayInNorwegian();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!*/

// Enhanced function that returns today's date as a Date object
function getTodayDateObject() {
    return new Date(); // Returns today's date as a Date object
  }
  

  function daysUntilRelease() {
    const today = getTodayDateObject();
    const releaseDate = new Date("2025-05-14");
    
    const diffInMilliseconds = releaseDate - today;
    
    const daysRemaining = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
    return daysRemaining;
  }
  

  function displayCountdown() {
    const todayDateObject = getTodayDateObject();
    const norwegianDate = todayDateObject.toLocaleDateString("no-NB", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const daysRemaining = daysUntilRelease();
    
    // Display output
    printOut(`📅 Dagens dato: ${norwegianDate}`);
    printOut(`🚀 Hypetoget går om ${daysRemaining} dager! 2XKO lanseres 14. mai, 2025!`);
    printOut("🎮 Gjør deg klar for en episk opplevelse i League of Legends-universet! Bare vent til kundene finner ut at det er pay to win 🤫");
  }
  
  // Run Part 2 function
  displayCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the radius of a circle and prints the diameter, circumference, and area.*/
function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
  
    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference: ${circumference.toFixed(2)}`);
    printOut(`Area: ${area.toFixed(2)}`);
  }
  
  // Run Part 3 function with example radius
  calculateCircleProperties(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/
function calculateRectangleProperties(dimensions) {
const { width, height} = dimensions;
const circumference = 2 * (width + height);
const area = width * height;

printOut(`Rectangle Circumference: ${circumference}`);
printOut(`Rectangle Area: ${area}`);
}

calculateRectangleProperties({ width: 8, height: 4 });
    
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* text */
const ETemperaturType = { Celsius: 1, Fahrenheit: 2, Kelvin: 3 };

function convertTemperature(aTemperature, aType) {
  let Fahrenheit = 0;
  let Celsius = 0;
  let Kelvin = 0;
  switch (aType) {
    case ETemperaturType.Celsius:
      printOut("Convert from Celsius");
      //convert to Fahrenheit
      //Fahrenheit = (Kevin - 237.15)*9/5 + 32;
      Celsius = aTemperature;
      Fahrenheit = (Celsius * 9) / 5 + 32;
      Kelvin = Celsius + 237.15;
      break;
    case ETemperaturType.Fahrenheit:
      printOut("Convert from Fahrenheit");
      break;
    case ETemperaturType.Kelvin:
      printOut("Convert from Kelvin");
      break;
  } // End switch

  printOut("Celsius = " + Celsius.toFixed(0));
  printOut("Fahrenheit = " + Fahrenheit.toFixed(0));
  printOut("Kelvin = " + Kelvin.toFixed(0));
} // End function

convertTemperature(37.5, ETemperaturType.Celsius)
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(aPrice, aTaxGroup) {
    let net = NaN;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;
  
    printOut("taxGroup = " + taxGroup);
  
    switch (taxGroup) {
      case "NORMAL":
        vat = 25;
    }
  
    if (!Number.isNaN(vat)) {
      net = (100 * aPrice) / (vat + 100);
    }
  
    return net;
  }
  
  const netPrice1 = calculateNetPrice(100, "normal");
  if (Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice1 = " + netPrice1.toFixed(2));
  }
  
  const netPrice2 = calculateNetPrice(100, "goblins");
  if (Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice2 = " + netPrice2.toFixed(2));
  }

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/

function calculateMissingValue(speed, distance, time) {
  if (speed === undefined && distance !== undefined && time !== undefined) {
    return distance / time; 
  } 
  else if (distance === undefined && speed !== undefined && time !== undefined) {
    return speed * time; 
  } 
  else if (time === undefined && speed !== undefined && distance !== undefined) {
    return distance / speed; 
  } 
  else {
    return NaN; // 
  }
}


printOut(`Calculated Speed: ${calculateMissingValue(undefined, 100, 2)}`);
printOut(`Calculated Distance: ${calculateMissingValue(50, undefined, 2)}`);
printOut(`Calculated Time: ${calculateMissingValue(50, 100, undefined)}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.*/

// Function to align text with specified width and alignment option
function alignText(text, maxLength, char, alignLeft) {
    // Ensure padding character is a space for alignment
    char = " "; 
  
    // Calculate padding length based on the maximum length
    let paddingLength = maxLength - text.length;
  
    // If padding is zero or negative, return text as it is
    if (paddingLength <= 0) {
      return text; // Return without padding if text is too long
    }
  
    // Create the padding string
    let padding = char.repeat(paddingLength);
  
    // Construct aligned text based on alignment direction
    return alignLeft ? text + padding : padding + text;
  }
  
  // Combine both aligned outputs in a single line
  let leftAlignedText = alignText("This is a text", 80, " ", true);
  let rightAlignedText = alignText("This is a text", 80, " ", false);
  
  // Print both left and right aligned texts in a single line output
  printOut(leftAlignedText + " " + rightAlignedText);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun() {
    let op = 1;
    let line = 1;
    // Left side
    let ok = false;
    do {
      let sumLeft = 0;
      for (let left = 0; left < line + 1; left++) {
        sumLeft += op;
        op++;
      }
  
      let sumRight = 0;
      for (let right = 0; right < line; right++) {
        sumRight += op;
        op++;
      }
  
      if (sumLeft !== sumRight) {
        ok = false;
      }else{
        ok = true;
      }
      line++;
      
    } while (ok);
  }
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.*/
function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Test case for Part 10
  let number = 9;
  let result = factorial(number);
  printOut("Factorial of " + number + " is: " + result);
printOut(newLine);
