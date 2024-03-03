// Given a string, you have to return a string in which each CharacterData(case-sensitive) is repeated oncuechange.

// Turn the String into Array
// Loop through the Array
// Repeat Each Element Once
// Return the Array Into String again

function doubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}

console.log(doubleChar("ahmed"));
