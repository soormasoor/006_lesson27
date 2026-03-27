"use strict";
function curry(callbackFn) {
  return function result(...args) {
    if (callbackFn.length <= args.length) {
      return callbackFn(...args);
    }

    return function (...otherArgs) {
      return result(...args.concat(otherArgs));
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1, 2, 3));

console.log(curriedAdd.length);
console.log(add.length);
