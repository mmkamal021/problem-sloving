// Create Empty String
// Take the Number Argument And Loop through it
// Add the String to the Empty one

// repeat string using for loop
function repeatString(number, str) {
  let newString = "";
  for (let i = 0; i < number; i++) {
    newString += str;
  }
  return newString;
}

console.log(repeatString(3, " hello "));

// repeat string using repeat function
function repeatString(number, str) {
  return str.repeat(number);
}

console.log(repeatString(6, " hello "));
