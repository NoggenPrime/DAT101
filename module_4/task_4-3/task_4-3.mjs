"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle.*/

const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", () => {
    const width = parseFloat(document.getElementById("txtRectWidth").value);
    const height = parseFloat(document.getElementById("txtRectHeight").value);
    const perimeter = 2 * (width + height);
    const area = width * height;
    document.getElementById("txtTask1Output").textContent = 
        `Circumference = ${perimeter}, Area = ${area}`;
});

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return".
○ Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)*/

const txtTask2Word = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");
const task2Words = [];

txtTask2Word.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        task2Words.push(txtTask2Word.value.trim());
        txtTask2Output.textContent = 
            `Number of words = ${task2Words.length}, Words = ${task2Words.join(", ")}`;
        txtTask2Word.value = ""; // Clear input field
        event.preventDefault();
    }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output.*/
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", () => {
    const selected = Array.from(document.querySelectorAll('input[name="chkTask3"]:checked'))
        .map(checkbox => checkbox.value);
    document.getElementById("txtTask3Output").textContent = 
        `Selected: ${selected.join(", ")}`;
});

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output.*/


const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

CarTypes.forEach((car) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carType";
    radio.value = car;
    radio.addEventListener("change", () => {
        txtTask4Output.textContent = `Selected car: ${car}`;
    });

    const label = document.createElement("label");
    label.textContent = car;
    label.prepend(radio);

    divTask4Cars.appendChild(label);
    divTask4Cars.appendChild(document.createElement("br"));
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", () => {
    txtTask5Output.textContent = `Selected animal: ${selectTask5Animals.value}`;
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output.*/


const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

GirlsNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    selectTask6Girls.appendChild(option);
});

selectTask6Girls.addEventListener("change", () => {
    txtTask6Output.textContent = `You selected: ${selectTask6Girls.value}`;
});
//--- Part 7 ----------------------------------------------------------------------------------------------
/* Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.*/


const selectMovieGenre = document.getElementById("selectMovieGenre");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

MovieGenre.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    selectMovieGenre.appendChild(option);
});

cmbAddMovie.addEventListener("click", () => {
    const title = document.getElementById("txtMovieTitle").value;
    const genre = selectMovieGenre.value;
    const director = document.getElementById("txtMovieDirector").value;
    const rating = document.getElementById("txtMovieRate").value;

    const row = tblMovies.insertRow();
    row.insertCell(0).textContent = tblMovies.rows.length - 1; // Auto-incrementing row number
    row.insertCell(1).textContent = title;
    row.insertCell(2).textContent = genre;
    row.insertCell(3).textContent = director;
    row.insertCell(4).textContent = rating;

    // Clear input fields
    document.getElementById("txtMovieTitle").value = "";
    document.getElementById("txtMovieDirector").value = "";
    document.getElementById("txtMovieRate").value = "5";
});
