"use strict";
function createCounter() {
  let count = 0;
  return () => ++count;
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

const otherCounter = createCounter();

console.log(otherCounter());
