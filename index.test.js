const { reverseString, capitalizeWords, countVowels } = require('./index');

describe('String Utilities', () => {
  test('reverseString reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
  });

  test('capitalizeWords capitalizes the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('make it count')).toBe('Make It Count');
  });

  test('countVowels counts the vowels in a string', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('world')).toBe(1);
  });
});
