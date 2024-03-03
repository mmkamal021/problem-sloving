/*
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says: "found the needle at position"
*/

// Loop Through the Array
// Check if the element === needle
// Return the message

function findNeedle(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}
console.log(findNeedle(["hay", "junk", "needle", "moreJunk"]));

function findNeedle2(array) {
  return "found the needle at position " + array.indexOf("junk");
}
console.log(findNeedle2(["hay", "junk", "needle", "moreJunk"]));
