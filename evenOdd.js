/*
Create a function that takes an integer as an argument and returns "Even" for even numbers "Odd" for odd numbers.
*/

// Even Odd function with if else
function evenOdd(value) {
  if (value % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOdd(5));

// Even Odd function with ternary Operator
function evenOdd(value) {
  return value % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOdd(50));
