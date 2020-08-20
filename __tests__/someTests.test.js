// note that each file with tests counts as a "test suite"
// a test suite must have at least one test to pass
test('existence', () => {
  expect(true).toBe(true);
});


// group together related tests in a describe statement
// the describe statement will be a header for the contained tests
// each test inside add to the test counter
describe('basic tests of testing with jest', () => {
  test('truth sanity', () => {
    expect(true).toBe(true);
  });

  test('not truth sanity', () => {
    expect(false).not.toBe(true);
  });

  test('basic math sanity', () =>{
    expect(1 + 1).toBe(2);
  });

  test('more complicated math sanity', () => {
    expect(2 ** (5 + 4) / 2 - (32 * 8)).toBe(0);
  });

  // can group related tests together in one test statement
  // the combo only counts as one test
  test('a truth sanity combo', () => {
    expect(true).toBe(true);
    expect(false).not.toBe(true);
  });

});


describe('tracking on mock functions', () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc('towel', 'babel fish', 'don\'t panic');

  test('that the function was invoked with toHaveBeenCalled', () => {
    expect(mockFunc).toHaveBeenCalled();
  });

  test('how many times a function was invoked with toHaveBeenCalledTimes', () => {
    expect(mockFunc).toHaveBeenCalledTimes(2);
    expect(mockFunc).not.toHaveBeenCalledTimes(1);
    expect(mockFunc).not.toHaveBeenCalledTimes(3);
  });

  test('with what inputs was a function invoked using toHaveBeenCalledWith', () => {
    expect(mockFunc).toHaveBeenCalledWith('towel', 'babel fish', 'don\'t panic');
    expect(mockFunc).not.toHaveBeenCalledWith('aaaaaaaarrrrrrrggggggg');
  });
});


describe('testing with an array', () => {
  test('exact contents of an array with toEqual', () => {
    const testArr = [1, 3, 5, 8];
    expect(testArr).toEqual([1, 3, 5, 8]);
  });
});


describe('testing with an object', () => {
  test('exact contents of an object with toEqual', () => {
    const testObj = { thanks: "for", listening: 'everyone' };
    expect(testObj).toEqual({ thanks: "for", listening: 'everyone' });
  });
});


