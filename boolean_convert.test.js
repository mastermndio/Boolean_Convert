const boolToWord = require('./boolean_convert');

test('True equals Yes', () => {
  expect(boolToWord(true)).toBe("Yes");
});

test('False equals No', () => {
  expect(boolToWord(false)).toBe("No");
});
