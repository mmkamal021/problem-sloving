You get an array of numbers, return the all of the positives array.

// InitValue = []
// iteration every item in array using for loop 


function positiveNumber(array) {
  let initValue = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] > 0) {
      //   let init = initValue.push(array[i]);
      initValue.push(array[i]);
      // console.log(count);
    }
  }
  console.log(initValue);
}
positiveNumber([-1, 2, 8, -9, 5]);


function positiveNumber2(arr) {
  // console.log(arr);
  return arr.filter((x) => x > 0);
}
console.log(positiveNumber2([-1, 2, 8, -9, 5]));
