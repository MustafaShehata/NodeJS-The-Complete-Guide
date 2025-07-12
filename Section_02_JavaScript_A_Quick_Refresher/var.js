/*
    "var" has no block scope
    variables declared with "var" are either function-scoped or global-scoped.
    They are visible through blocks.
 */

// if (true) {
//   var test=true; // use "var" instead of "let"
// }

// alert(test); // true, the variable lives after if

/*  As "var" ignores code blocks, we've got a global variable "test" */

/*
    The same thing for loops: var cannot be block- or loop-local

*/

// for (var i=0 ; i < 10 ; i++) {
//   var one=1;
//   // ....
// }

// /* We can access to "var" variable outside of the loop-local / block-local */
// console.log(i); // 10, "i" is visible after loop, it's a global variable
// console.log(one); // 1, "one"  is visible after loop, it's a global variable


// function sayHi() {
//   if (true) {
//     var phrase = "Hello";
//   }
//   alert(phrase); //works
// }

// sayHi();
// alert(phrase); // RefernenceError: pharse in not defined


// Hoisting/Raising because all var are "Hoisted" (raised) to the top of the function

// function sayHi() {
//   phrase = "Hello";

//   alert(phrase);

//   var phrase;
// }
// sayHi();



// =========================

// // declarations are hoisted, but assignments are not.
// function sayHi() {
//   alert(phrase);

//   var phrase="Hello"; // varabile declaration + variable Assignment/Initialization
// }

// sayHi();

// The code works essentially like this:

// function sayHi() {
//   var phrase; // declaration works at the start...
//   alert(phrase); // undefined
//   phrase="Hello"; // ...assignment - when the execution reaches it.
// }
// sayHi();

// =========================

// IIFE = "immediately-invoked function expressions" (abbreviated as IIFE)

// Function expression

// (function() {

//   var message = "Hello";

//   alert(message); // Hello

// })();

// console.log(message); // variable(message) is not defined

