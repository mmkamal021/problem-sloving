/*
You get an array of numbers, return the sum of all of the positives ones. 
Example [1, -4, 7, 12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
// InitValue = 0
// Array Loop
// Check if the number is positive or not
// Add the number to the initValue if positive

// Sum of positive number in array with using for loop, if else
function sumOfPositive(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}
console.log(sumOfPositive([1, -3, 5, 9]));

// Sum of positive number in array with using filter,reduce function
function sumOfPositive2(arr) {
  return arr
    .filter((x) => x > 0)
    .reduce((preValue, currentValue) => preValue + currentValue, 0);
}
console.log(sumOfPositive2([-1, 3, 5, -7]));
