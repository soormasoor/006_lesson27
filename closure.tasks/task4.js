"use strict";
function createPerson(name = "", age = -1) {
  const result = {
    _name: name,
    _age: age,

    getName() {
      return result._name;
    },

    setName(newName) {
      result._name = newName;
    },

    getAge() {
      return result._age;
    },

    setAge(newAge) {
      result._age = newAge;
    },
  };

  Object.defineProperties(result, {
    _name: {
      enumerable: false,
      configurable: false,
    },
    _age: {
      enumerable: false,
      configurable: false,
    },
  });

  return result;
}

const person = createPerson("Alice", 30);
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25

console.log(person);
