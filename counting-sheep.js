// Consider an array/list of sheep where som e sheep may be missing from their place.We need a function that counts the number of sheep present in the array (true means present)

// Initial value of zero
// Loop through the array
// Check if the sheep === True , increase the Intial Value + 1

function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.map((m) => {
    if (m === true) counter++;
  });
  return counter;
}
