// merge and sort
// input : [1,0,5,13], [2,3,4,6]
// output : [0,1,2,3,4,5,6,13]

function mergeSortArray(arr1, arr2) {
  const mergeArray = arr1.concat(arr2).sort((a, b) => a - b);
  console.log(mergeArray);
}
mergeSortArray([1, 0, 5, 13], [2, 3, 4, 6]);
mergeSortArray([4, 9, 5, 3], [-5, -1, 0, -1], [-5, -1, 0, -1]);
