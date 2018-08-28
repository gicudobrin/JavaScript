// Instruction
// Common JavaScript Data Types
// JavaScript has six primitive data types: Boolean, Null, Undefined, Number, String, and Symbol.

// Boolean
// Booleans are standard across all programming languages. A Boolean data type represents only one of two values: true or false.

// Developers use a Boolean to represent the current state of something that is likely to change. For example, you can use a Boolean to show whether a checkbox is checked or not:

// var isChecked = true;

// Null
// null is a special value that explicitly represents "nothing" or something that does not exist. For example, this code states that age is unknown or empty.

// let age = null;

// Undefined
// The meaning of undefined is “value is not assigned”. A variable can be declared but not assigned a value:


// var n;
// alert(n); // shows "undefined"

// What's the difference between null and undefined?
// The main distinction is that null is an assigned value -- an intentionally empty value. undefined means that there is a variable declared, but the value of that variable has not yet been defined.

// Number
// Number is a numeric data type. As you learned earlier, numbers can be written with or without a decimal point.

// You can perform different operations with numbers, like multiplication *, division /, addition +, and subtraction -.

// String
// A String is a grouping of characters used to represent text. Strings must be inside of either double " or ' single quotes. For example:

// const author = "Ursula K Le Guin";
// const book = 'A Wizard of Earthsea';
// Symbol
// Symbol is a new data type in ES2015 that represents a unique identifier. You can read more about this new data type in the MDN docs.

// Use the typeof operator to see which data type is stored in a variable.
// For example:

// let name = "Alena Holligan";
// alert(typeof name); // returns "string"

// let score = 150;
// alert(typeof score); // returns "number"

// let x;
// alert(typeof x); // returns "undefined"
// Practice JavaScript Math Methods
// In this short workshop, you will practice using JavaScript's math methods to add, subtract, multiply, divide, as well as to convert strings to numbers.


// Instruction
// Define Variables with let and const
// ES2015 introduced two new keywords for declaring variables: const and let. Both work similarly to var. You use the keyword -- const or let -- and a value you want to put into the variable:

// let message = "Hello";
// const pi = 3.14159;
// let score = 0;
// const is short for constant, meaning that the value of the variable shouldn't change -- it should remain "constant". const protects a variable from being overwritten by any stray assignments in your code. In other words, once you create a constant you can't give it another value. For example:

// const myName = 'Guil';

// // this will throw an error - Uncaught TypeError: Assignment to constant variable.
// myName = 'James';
// The let keyword is used when you want to reassign a variable. In that respect, it works like var. For example, we can update the values of age and isHungry:

// let age = 43;
// let isHungry = true;

// age = 44;
// isHungry = false;
// But we cannot redefine a let variable within the same context or scope.

// let age = 43;
// let isHungry = true;

// let age = 44; // Uncaught SyntaxError: Identifier 'age' has already been declared
// let isHungry = false; // Uncaught SyntaxError: Identifier 'isHungry' has already been declared
// When should you use const, and when should use you let?
// const is your first option when declaring variables. It helps prevent reassignment bugs and help you debug your code faster. let is a great substitute for var when you're wanting to reassign a value.

// To learn more, view the Treehouse workshop Defining Variables with let and const

// Practice working with let and const variables
// We created a short workshop to help you practice what you've learned about let and const. In the workshop, you'll be challenged to fix problems in the code using your knowledge of const and let, then we'll work through the solution together.

var movies = [ 'Avengers', 'Wonder Woman', 'Black Panther', 'The last Jedi'];

for (var movie of movies) {
	console.log(movie);
}

// Instruction
// Common Loops and Iteration Methods
// JavaScript provides several different ways to create loops. Earlier, you learned about the forEach and for...of loops. Now let's take a look at other common loops and iteration methods in JavaScript.

// for
// For loops are frequently used for actions that need to run a particular number of times.

// The for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by the code that should run each time the condition remains true.

// for ( let counter = 1; counter < 10; counter++) {
//   console.log( counter );
// } 
// // logs 1, 2, 3, 4, 5, 6, 7, 8, 9

// const fruits = ['apple', 'pear', 'cherry'];

// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }
// // logs apple, pear, cherry
// while
// The while loop repeats a block of JavaScript code until a particular condition is no longer true. For example, in this code, we start with a variable named counter. At the beginning of the loop, the JavaScript interpreter compares the value in the counter variable to 10. If the value inside counter is less then 10, the loop runs.

// var counter = 1;
// while (counter < 10 ) {
//   console.log( counter );
//   counter = counter + 1;
// }
// The loop logs the value inside the counter variable to the console, then increases the value inside counter by 1. After going through the loop 10 times, the counter value is set to 10, the condition is false and the loop is done.

// do...while
// The do...while loop is closely related to the while loop. do...while creates a loop that executes a statement until the test condition evaluates to false.

// The main difference between while and do...while is that do...while doesn't check the condition until the code block has run once. Then, if the condition is true, it runs again...and again...until the condition is no longer true.

// var counter = 1;
// do {
//   counter = counter + 1;
//   console.log( counter );
// } while (counter < 10);
// map()
// The map() array iteration method is used to transform each item in an array into something else, leaving the original array unchanged. For example, this code will capitalize all the words within the fruits array:

// const fruits = ['apple', 'pear', 'cherry'];

// const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
// console.log(capitalizedFruits) // [ 'APPLE', 'PEAR', 'CHERRY' ]

const numbers = [1,2,3,4,5,6,7,8,9,10];
let times5 = [];

// times5 should be: [5,10,15,20,25,30,35,40,45,50]
// Write your code below

numbers.forEach(function(number){
  times5.push(number*5)
});

console.log(times5);