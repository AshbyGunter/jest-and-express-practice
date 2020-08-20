const someMath = require('../doSomeMath.js');
// note that each file with tests counts as a "test suite"
// a test suite must have at least one test to pass

test('an addition function on 5 + 6 = 11', () => {
  expect(someMath.add(5, 6)).toBe(11);
});

// different syntax can be used for some tests with similar results
// just be careful you are sure you're testing what you mean to be testing!
// read the docs - remeber that in JS "==" and "===" are similar but distinct
test('there\'s more than one way to skin a cat', () => {
  expect(someMath.add(5, 6)).toEqual(11);
});

// intentionally failing to show results
// if one fails, the whole test fails
test('a subtraction function on 4 - 2 = 2', () => {
  expect(someMath.subtract(4, 2)).not.toBe(22);
  expect(someMath.subtract(4, 2)).toBe(22);
});

// swap the comments on the expects
test('a multiply function on 3 * 7 = 21', () => {
  // expect(someMath.multiply(3, 7)).toBe(21);
  expect(someMath.subtract(3, 7)).toBe(21);
});

// division is totally doable
test('a divide function on 16 / 4 = 4', () => {
  expect(someMath.divide(21, 7)).toBe(3);
});

// but be careful, because division leads to weirdness!
// jest can handle some weirdness, but you need to be expecting it
// comment out expects one by one - the last is the one that passes
test('floating point numbers are weird', () => {
  expect(someMath.divide(10, 3)).toBe(3.33);
  // expect(someMath.divide(10, 3)).toEqual(3.33);
  // expect(someMath.divide(10, 3)).toBeCloseTo(3.33);
});

