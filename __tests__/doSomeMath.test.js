const someMath = require('../doSomeMath.js');


xtest('an addition function on 5 + 6 = 11', () => {
  expect(someMath.add(5, 6)).toBe(11);
});

/*
test('there\'s more than one way to skin a cat', () => {
  expect(someMath.add(5, 6)).toEqual(11);
});

/*
xtest('a subtraction function on 4 - 2 = 2', () => {
  expect(someMath.subtract(4, 2)).toBe(22);
});

/*
xtest('a multiply function on 3 * 7 = 21', () => {
  // expect(someMath.multiply(3, 7)).toBe(21);
  expect(someMath.subtract(3, 7)).toBe(21);
});

/*
xtest('a divide function on 16 / 4 = 4', () => {
  expect(someMath.divide(21, 7)).toBe(3);
});

/*
xtest('floating point numbers are weird', () => {
  expect(someMath.divide(10, 3)).toBe(3.33);
  expect(someMath.divide(10, 3)).toEqual(3.33);
  expect(someMath.divide(10, 3)).toBeCloseTo(3.33);
});

*/
