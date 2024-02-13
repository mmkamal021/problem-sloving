/*
Sum all the numbers of a given array,except the highest and the lowest element (by CSSMathValue, not by index!).
The highest or lowest element respectively is a single element at each edge,even if there are more than one with the same value.
Mind the input validation. 

Input validation

If an empty value( null, None, Nothing etc ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.  
*/

// Check if Empty Value return 0.
// Find the highest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the Array

// Sum in array without highest and lowest number Using Math.max, Math.min, filter, reduce function.
function sumWithoutHighestLowestNumber(array) {
  if (array == null) return 0;
  //   console.log(array);
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);
  //   console.log(maxValue, minValue);

  let filteredArray = array.filter((x) => x !== maxValue && x !== minValue);
  //   console.log(filteredArray);

  let sumOfNewArray = filteredArray.reduce(
    (preValue, current) => preValue + current,
    0
  );
  //   console.log(sumOfNewArray);
  return sumOfNewArray;
}
// console.log(sumWithoutHighestLowestNumber([1, 2, 3, -5, 9, 10]));

// Sum in array without highest and lowest number Using Math.max, Math.min, filter, reduce function one line.
function sumWithoutHighestLowestNumber2(array) {
  if (array == null) return 0;
  return array
    .filter((x) => x !== Math.max(...array) && x !== Math.min(...array))
    .reduce((preValue, currentValue) => preValue + currentValue, 0);
}
// console.log(sumWithoutHighestLowestNumber2([1, 1, 11, 2, 2, 3]));

// Sum in array without highest and lowest number and skip highest and lowest duplicate value Using sort, slice, reduce function .

// if the result is negative, a is sorted before b.
// if the result is positive, b is sorted before a.
// if the result is 0, no changes are done with the sort order of the two values.

function sumWithoutHighestLowestNumber3(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}
// console.log(sumWithoutHighestLowestNumber3([1, 1, 11, -2, 2, 3]));
