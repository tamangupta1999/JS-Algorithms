function recursiveBinarySearch(arr = [], target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}


const inputArray = [-5, 2, 4, 6, 10];

console.log(recursiveBinarySearch(inputArray, 10)); //4
console.log(recursiveBinarySearch(inputArray, 6)); //3
console.log(recursiveBinarySearch(inputArray, 20)); //-1



//Big-O = O(logn)