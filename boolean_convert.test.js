const boolToWord = require('./boolean_convert');

test('True equals Yes', () => {
  expect(boolToWord(true)).toBe("Yes");
});

test('False equals No', () => {
  expect(boolToWord(false)).toBe("No");
});

test('Input string "true"', () => {
  expect(boolToWord("true")).toBe("Input must be a boolean value - true or false");
});

test('Input string "false"', () => {
  expect(boolToWord("false")).toBe("Input must be a boolean value - true or false");
});

test('Input string "fjkdolnsajlfnjsd"', () => {
  expect(boolToWord("true")).toBe("Input must be a boolean value - true or false");
});
