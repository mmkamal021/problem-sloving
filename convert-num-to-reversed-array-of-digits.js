// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Change the number to String
// Split the String ti an array
// Change the Strings in the array to Numbers
// Reverse the Array

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse();
}

// console.log(typeof digitize(567));
console.log(digitize(567));
