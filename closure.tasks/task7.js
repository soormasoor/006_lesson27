"use strict";
function createCalculator(operation) {
  const operations = {
    add: (a, b) => a + b,

    substract: (a, b) => a - b,

    multiply: (a, b) => a * b,

    divide: (a, b) => a / b,
  };

  return operations[operation];
}

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8
const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); // Output: 8
