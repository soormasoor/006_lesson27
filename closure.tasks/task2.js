function privateVariable(value) {
  const result = {
    _variable: value,

    set(newValue) {
      result._variable = newValue;
    },

    get() {
      return result._variable;
    },
  };

  Object.defineProperty(result, "_variable", {
    enumerable: false,
  });

  return result;
}

const secretValue = privateVariable(42);
console.log(secretValue);
console.log(secretValue.get()); // Output: 42
secretValue.set(100);
console.log(secretValue.get()); // Output: 100
