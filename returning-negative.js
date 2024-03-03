// You are given a number and have to make it negative.But maybe the number is already negative.

function makeNegative(num) {
  return num > 0 ? -num : num;
}

console.log(makeNegative(5));
console.log(makeNegative(-5));
