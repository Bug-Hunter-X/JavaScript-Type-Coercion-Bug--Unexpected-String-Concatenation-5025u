function myFunc(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(myFunc(1, '2')); // Output: Error: Inputs must be numbers
console.log(myFunc(1, 2)); // Output: 3