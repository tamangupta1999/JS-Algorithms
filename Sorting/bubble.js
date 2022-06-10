function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const inputArr = [5, 4, -2, 10, 7, 6];


console.log(bubbleSort(inputArr));


//Big-O = O(n^2)

function bubbleSortWhile(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped)
  return arr;
}

// const inputArr = [5, 4, -2, 10, 7, 6];


console.log(bubbleSortWhile(inputArr));


//Big-O = O(n^2)