// const name = "Max";
// var age = 29;
// const hasHobbies = true;

// Error: Assignment to constant variable
// name = "Amr";

// age = 30;

// Normal Function
// function summarizeUser(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobby
//   );
// }

// Anonymous Function
// const summarizeUser = function (userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobby
//   );
// };

// Arrow function
// const summarizeUser = (userName, userAge, userHobby) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHobby
//   );
// };

// const add = (a,b) => a + b;
// const addOne = a =>  a + 1;
// const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
// console.log(addRandom());

// console.log(summarizeUser(name, age, hasHobbies));

// *******  16. Working with Objects, Properties, & Methods *******

// const person = {
//   name: "Max",
//   age: 29,
//   greet() {
//     console.log("Hi, I'm " + this.name);
//   }
// };

// console.log(person);
// person.greet();


// *******  17. Arrays & Array Methods && 18. Arrays, Objects & Reference Types && 19. Understanding Spread & Rest Operators *******

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
// console.log(hobbies);


/*

  Objects and Arrays are so called reference types

*/

// hobbies.push("Programming");
// console.log(hobbies); // Not Getting an Error!!!

// const copiedArray=hobbies.slice(); // return the old array into a new array
// const copiedArray=[hobbies]; // make an array as the first element in base array
// const copiedArray=[...hobbies]; // rest Operator
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1,2,3,4));


// ******* 20. Destructuring *******

const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

const printName = (personData) => {
  console.log(personData.name);
};

printName(person);