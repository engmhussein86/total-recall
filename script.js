console.log('running');
// Section 1
// A. Variables
console.log('A. Variables');
const myName = "Mariam Hussein";
let favoriteLanguage  = "Python";
let newFavoriteLanguage = "Javascript";

newFavoriteLanguage = favoriteLanguage;

console.log(`Hello, my name is ${myName} and my favorite programming language is ${favoriteLanguage}.`);

console.log('-----------------------------------------------');
// B. Strings
console.log('B. Strings');
let firstVariable = "Hello World";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable ="perscholas";

// Log the value of firstVariable
console.log("The value of firstVariable is:", firstVariable);

// Create a variable called yourName and set it equal to your name as a string
let yourName = "Mariam Hussein";

// Concatenate the string "Hello, my name is " with the variable yourName
let greeting = "Hello, my name is " + yourName;

// Log the concatenated string
console.log(greeting);
console.log('-----------------------------------------------');
// C. Booleans
console.log("C. Booleans");
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a <= b);
console.log(c >= d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true != false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
console.log('-----------------------------------------------');
// D. The farm
console.log("D. The farm");
let animal = "cow";

// Write code that will print out "mooooo" if it is equal to cow
if (animal === "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}

console.log('-----------------------------------------------');
// E. Driver's Ed
console.log("E. Driver's Ed");
// Make a variable that holds a person's age; be semantic
let personAge = 18;

// Write code that will print out appropriate messages based on the age
if (personAge >= 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young.");
}
console.log('-----------------------------------------------');
// Section3
//F. Biggie Smalls
console.log("F. Biggie Smalls");

// Create a variable that contains an integer
let number = 75;

// Write an if...else statement to check the value of the number
if (number < 100) {
    console.log("little number");
} else {
    console.log("big number");
}

console.log('-----------------------------------------------');
// Section3
//G. Monkey in the Middle
console.log("G. Monkey in the Middle");
// Create a variable that contains an integer
let grade = 75;

// Write an if...else statement to check the value of the number
if (grade < 100) {
    console.log("little number");
} else {
    console.log("big number");
}
///////////////////////////////////////
//II. Loops
console.log("II. Loops");
console.log("A. The basics");
console.log("Write a loop that will print out all the numbers from 0 to 10, inclusive");
for(let i = 0; i <= 10; i++){
    console.log(i);
}
console.log("Write a loop that will print out all the numbers from 10 up to and including 400");
for(let i = 10; i <= 400; i++){
    console.log(i);
}
console.log("Write a loop that will print out every third number starting with 12 and going no higher than 4000");
for(let i = 12; i <= 4000; i+=3){
    console.log(i);
}
////////////////////////////////////////
console.log("B. Get even");
console.log("Print out the numbers that are within the range of 1 - 100");
for(let i = 1; i <= 100; i++){
    console.log(i);
}
console.log(`Adjust your code to add a message next to even numbers only that says: "is an even number"`);
for(let i = 1; i <= 100; i++){
    
    console.log(`${i} : ${(i%2===0)?"is an even number":""}`);
}








