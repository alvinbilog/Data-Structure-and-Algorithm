// make a function that will receive an array of numbers and a target number
// return the indices of the two numbers in the array that add up to the target number
// return null if theres no number that adds up to get the target number.

function twoNumber(arr, target) {
  let prevNum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[prevNum] + arr[i] === target) {
      return console.log(arr[prevNum - 1], arr[i - 1]);
    }
    prevNum = +1;
  }
  return console.log(null);
}
twoNumber([1, 2, 3, 4], 5);
twoNumber([4, 6, 7, 8], 15);
