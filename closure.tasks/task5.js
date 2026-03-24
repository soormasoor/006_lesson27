"use strict";
function add(a, b, c) {
  return a + b + c;
}

function partial(callbackFn, ...outerValues) {
  return function (...innerValues) {
    return callbackFn(...outerValues, ...innerValues);
  };
}

const add5 = partial(add, 5);
console.log(add5(10, 20)); // Output: 35 (5 + 10 + 20)

const add3And8 = partial(add, 3, 8);
console.log(add3And8(5, 2, 4, 5)); // 16: 3 + 8 + 5 |||| 2, 4, 5 left out
