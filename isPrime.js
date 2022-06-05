function isPrime(n) {
  if(n < 2) {
    return false;
  }
  for(let i = 2; i < n; i++) {
    if(n%i === 0) {
      return false;
    }
  };
  return true;
}

console.log("🚀 ~ file: isPrime.js ~ line 13 ~ isPrime ~ isPrime", isPrime(1))
console.log("🚀 ~ file: isPrime.js ~ line 14 ~ isPrime ~ isPrime", isPrime(5))
console.log("🚀 ~ file: isPrime.js ~ line 15 ~ isPrime ~ isPrime", isPrime(24))


/**
 * More optimal solution
 * @param {*} n 
 * @returns {Boolean}
 */

function isPrimeOptimal(n) {
  if(n < 2) {
    return false;
  }
  for(let i = 2; i < Math.sqrt(n); i++) {
    if(n%i === 0) {
      return false;
    }
  };
  return true;
}


console.log("🚀 ~ file: isPrime.js ~ line 37 ~ isPrimeOptimal ~ isPrimeOptimal", isPrimeOptimal(1))
console.log("🚀 ~ file: isPrime.js ~ line 38 ~ isPrimeOptimal ~ isPrimeOptimal", isPrimeOptimal(5))
console.log("🚀 ~ file: isPrime.js ~ line 39 ~ isPrimeOptimal ~ isPrimeOptimal", isPrimeOptimal(24))
