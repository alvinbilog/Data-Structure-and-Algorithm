// make a function that will return the recurring number and undefined if not found any recurring number.
// the function will receive an array
// we initialize seen as a new Set()
// iterate the array of numbers
// if the current index is found the seen array, return the number
// and if not add the number in the seen array
// expected input: [2,5,1,2,3,5]
// expected output: 2
// expected input: [2,1,1,2,3,5]
// expected output: 2
// expected input: [1,2,3,4]
// expected output: undefined

function recurringNumber(arr) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i];
    }
    seen.add(arr[i]);
  }
  return undefined;
}
console.log(recurringNumber([2, 5, 1, 2, 3, 5]));
console.log(recurringNumber([2, 1, 1, 2, 3, 5]));
console.log(recurringNumber([1, 2, 3, 4]));
