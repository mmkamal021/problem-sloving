/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Here is the solve 1
function stringToArray(string) {
  return string.split(' ')
}

// Here is the solve 2
const stringToArray = (string) => {
  return string.split(' ')
}

// Here is the solve 3
const stringToArray = (string) => string.split(' ')

// Here is the solve 4 (don't understand)
// Unsloved
function stringToArray(string) {
  var result = []
  var traverse = function foo(string) {
    for (var i = 0; i < string.length; i++) {
      var chr = string.charAt(i)
      if (chr === ' ') {
        result.push(string.slice(0, i))
        foo(string.slice(i + 1))
        return
      }
    }
    result.push(string)
  }
  traverse(string)
  return result
}
