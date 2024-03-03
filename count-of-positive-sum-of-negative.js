/*
Return an array, Where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. 
if the input is an empty array or is null, return an empty array. 
*/

// Crete Empty Array for the Positive Numbers
// Create a Variable for the Sum of Negatives
// Loop through the Given Array
// Check if the number is positive add it to the Array, if negative add to the Sum Variable

function countPositivesSumNegatives(input) {
  let positivesArray = [];
  let sumNegatives = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positivesArray.push(input[i]);
    } else {
      sumNegatives += input[i];
    }
  }
  return [positivesArray.length, sumNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, -1, -2, -3]));

function countPositivesSumNegatives2(input) {
  let positivesArray = input.filter((x) => x > 0).length;
  let sumNegatives = input
    .filter((x) => x < 0)
    .reduce((pre, curr) => pre + curr, 0);
  return [positivesArray, sumNegatives];
}

console.log(countPositivesSumNegatives2([1, 2, 3, -1, -2, -3]));
