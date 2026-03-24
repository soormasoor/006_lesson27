"use strict";
function createCachingFunction() {
  const cacheObj = {};
  return function (num) {
    if (cacheObj.hasOwnProperty("value")) {
      console.log("CACHED");
      return cacheObj.value;
    }
    cacheObj.value = num * 2;
    console.log("CALCULATED");
    return cacheObj.value;
  };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
