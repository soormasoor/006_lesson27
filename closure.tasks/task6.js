"use strict";
function fibonacci(n) {
  if (n < 0 || isNaN(n)) {
    return -1;
  }
  let count = 1;
  let first = 0;
  let second = 1;
  while (count < n) {
    count++;
    [first, second] = [second, first + second];
  }
  return second;
}

// console.log(fibonacci(10));

function memoize(callbackFn) {
  const cacheObj = {};
  return function (value) {
    if (cacheObj.hasOwnProperty(value)) {
      console.log("CACHED");
      return cacheObj[value];
    }
    cacheObj[value] = callbackFn(value);
    console.log("CALCULATED");
    return cacheObj[value];
  };
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(11));
console.log(memoizedFibonacci(11));
console.log(memoizedFibonacci(10));
