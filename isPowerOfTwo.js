function isPowerOfTwo(n) {
  if(n < 1) {
    return false;
  }
  while(n > 1) {
    if(n %2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
} 

console.log("🚀 ~ file: isPowerOfTwo.js ~ line 2 ~ isPowerOfTwo ~ isPowerOfTwo", isPowerOfTwo(1))
console.log("🚀 ~ file: isPowerOfTwo.js ~ line 2 ~ isPowerOfTwo ~ isPowerOfTwo", isPowerOfTwo(2))
console.log("🚀 ~ file: isPowerOfTwo.js ~ line 2 ~ isPowerOfTwo ~ isPowerOfTwo", isPowerOfTwo(216))


//BigO  = O(logn) 


function isPowerOfTwoBitWise(n) {
  if(n < 1) {
    return false;
  }
  return (n & (n-1)) === 0;
} 

console.log("🚀 ~ file: isPowerOfTwo.js ~ line 23 ~ isPowerOfTwoBitWise ~ isPowerOfTwoBitWise", isPowerOfTwoBitWise(1));
console.log("🚀 ~ file: isPowerOfTwo.js ~ line 23 ~ isPowerOfTwoBitWise ~ isPowerOfTwoBitWise", isPowerOfTwoBitWise(2))
console.log("🚀 ~ file: isPowerOfTwo.js ~ line 23 ~ isPowerOfTwoBitWise ~ isPowerOfTwoBitWise", isPowerOfTwoBitWise(216))


//Big O = O(1)