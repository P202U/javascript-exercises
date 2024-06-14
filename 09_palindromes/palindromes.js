const palindromes = function (string) {
    const punctuation = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-', '_', ' ', " "];
    const stringArray = string.toLowerCase().split(''); // Convert to Array

    // Filter out punctuation
    const filteredString = stringArray.filter(item => !punctuation.includes(item)).join('');

    // Check for palindrome
    const reversedString = filteredString.split('').reverse().join('');
    return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
