function linearSearch(arr = [], target) {
  if(arr.length) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target){
        return i;
      }
    }
  } 
  return -1;
}

const inputArray = [-5, 2, 10, 4, 6];

console.log(linearSearch(inputArray, 10)); //2
console.log(linearSearch(inputArray, -5)); //0
console.log(linearSearch(inputArray, 20)); //-1


//Time Complexity - Linear
//Big O = O(n)
