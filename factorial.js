function factorial(n) {
  let res = 1;
  if( n === 0) {
    res = 1;
  }
  while(n > 0) {
    res *= n;
    n--;
  }
  return res;
}


console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(5)); //1


//Big O = O(n)