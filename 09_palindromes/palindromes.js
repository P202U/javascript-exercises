const palindromes = function (string) {
    const punctuation = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-', '_', ' ', " "];
    const stringArray = string.toLowerCase().split(''); // Convert to Array

    // Filter out punctuation
    const filteredArray = stringArray.filter(item => !punctuation.includes(item));

    // Check for palindrome
    let i = 0;
    let j = filteredArray.length - 1;
    while (i < j) {
        if (filteredArray[i] !== filteredArray[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
