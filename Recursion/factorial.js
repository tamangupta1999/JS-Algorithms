function recursiveFactorial(n) {
  if(n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(5)); //120 
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(6)); // 720
console.log(recursiveFactorial(3)); // 6


//Big O = O(n)
//Linear time complexity

//Recursive is a good solution for factorial of a number