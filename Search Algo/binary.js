function binarySearch(arr = [], target) {
  if (arr.length) {
    let middleIndex = Math.floor(arr.length / 2);
    if (target <= arr[middleIndex]) {
      for (let i = 0; i <= middleIndex; i++) {
        if (arr[i] === target) {
          return i;
        }
      }
    } else {
      for (let i = middleIndex + 1; i < arr.length; i++) {
        if (arr[i] === target) {
          return i;
        }
      }
    }
  }
  return -1;
}

const inputArray = [-5, 2, 4, 6, 10];

console.log(binarySearch(inputArray, 10)); //4
console.log(binarySearch(inputArray, -5)); //0
console.log(binarySearch(inputArray, 20)); //-1


//Time Complexity - Linear
//Big O = O(log n)

function binarySearchInAnotherWay(arr = [], target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1;
}


console.log(binarySearchInAnotherWay(inputArray, 10)); //4
console.log(binarySearchInAnotherWay(inputArray, -5)); //0
console.log(binarySearchInAnotherWay(inputArray, 20)); //-1



//Big O = O(logn)