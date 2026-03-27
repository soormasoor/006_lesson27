"use strict";
function createCachingFunction() {
  const cacheObj = {};
  return function (num) {
    if (cacheObj.hasOwnProperty(num)) {
      console.log("CACHED");
      return cacheObj[num];
    }
    cacheObj[num] = num * 2;
    console.log("CALCULATED");
    return cacheObj[num];
  };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
