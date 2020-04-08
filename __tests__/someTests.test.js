test('existence', () => {
  expect(true).toBe(true);
});


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

  test('grouping together a truth sanity combo', () => {
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
  });

  test('with what inputs was a function invoked using toHaveBeenCalledWith', () => {
    expect(mockFunc).toHaveBeenCalledWith('towel', 'babel fish', 'don\'t panic');
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


