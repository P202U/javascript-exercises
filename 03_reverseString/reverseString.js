const reverseString = function (string) {
    let reversedString = '';
    if (string === '') return '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};
// npm test reverseString.spec.js
// Do not edit below this line
module.exports = reverseString;
