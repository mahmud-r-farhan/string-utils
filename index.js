/**
 * Reverses the input string.
 * @param {string} str - The string to reverse.
 * @returns {string} - Reversed string.
 */
const reverseString = (str) => str.split('').reverse().join('');

/**
 * Capitalizes the first letter of each word in the string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - Capitalized string.
 */
const capitalizeWords = (str) =>
  str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

/**
 * Counts the number of vowels in the string.
 * @param {string} str - The string to check.
 * @returns {number} - Count of vowels.
 */
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

module.exports = {
  reverseString,
  capitalizeWords,
  countVowels,
};
