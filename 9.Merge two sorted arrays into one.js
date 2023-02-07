/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding
*/

// Here is the slove 1
// Unsloved
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)))
}
// Here is the slove 2
// Unsloved
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b)
}
// Here is the slove 3
// Unslove
function descendingDescending(arr1, arr2) {
  let i = arr1.length - 1,
    j = arr2.length - 1,
    output = []
  while (i >= 0 && j >= 0) {
    if (arr1[i] < arr2[j]) {
      output[output.length] = arr1[i]
      i--
    } else if (arr1[i] > arr2[j]) {
      output[output.length] = arr2[j]
      j--
    } else {
      output[output.length] = arr1[i]
      i--
      j--
    }
  }
  for (; i >= 0; i--) output[output.length] = arr1[i]
  for (; j >= 0; j--) output[output.length] = arr2[j]
  return output
}

function ascendingDescending(arr1, arr2) {
  let i = 0,
    j = arr2.length - 1,
    output = []
  while (i < arr1.length && j >= 0) {
    if (arr1[i] < arr2[j]) {
      output[output.length] = arr1[i]
      i++
    } else if (arr1[i] > arr2[j]) {
      output[output.length] = arr2[j]
      j--
    } else {
      output[output.length] = arr1[i]
      i++
      j--
    }
  }
  for (; i < arr1.length; i++) output[output.length] = arr1[i]
  for (; j >= 0; j--) output[output.length] = arr2[j]
  return output
}

function ascendingAscending(arr1, arr2) {
  let i = 0,
    j = 0,
    output = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output[output.length] = arr1[i]
      i++
    } else if (arr1[i] > arr2[j]) {
      output[output.length] = arr2[j]
      j++
    } else {
      output[output.length] = arr1[i]
      i++
      j++
    }
  }
  for (; i < arr1.length; i++) output[output.length] = arr1[i]
  for (; j < arr2.length; j++) output[output.length] = arr2[j]
  return output
}

function mergeArrays(arr1, arr2) {
  let caseMap = 0
  if (arr1[0] < arr1[arr1.length - 1]) caseMap += 2
  if (arr2[0] < arr2[arr2.length - 1]) caseMap += 1
  switch (caseMap) {
    case 0:
      return descendingDescending(arr1, arr2)
    case 1:
      return ascendingDescending(arr2, arr1)
    case 2:
      return ascendingDescending(arr1, arr2)
    case 3:
      return ascendingAscending(arr1, arr2)
  }
}
// Here is the slove 3
// Unsloved
function mergeArrays(arr1, arr2) {
  return arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2)
    .sort((a, b) => a - b)
}

// Here is the slove 4
// Unsloved
const _ = require('lodash')

function mergeArrays(arr1, arr2) {
  return _.sortBy(_.union(arr1, arr2))
}

// Here is the slove 5
function mergeArrays(arr1, arr2) {
  let res = []
  arr1.concat(arr2).forEach((el) => (!res.includes(el) ? res.push(el) : 0))
  return res.sort((a, b) => a - b)
}
