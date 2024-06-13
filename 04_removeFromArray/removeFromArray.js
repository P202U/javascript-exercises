const removeFromArray = function (arr, ...removable) {
    for (let remove of removable) {
        arr = arr.filter(item => item !== remove)
    }
    return arr;
};
// npm test removeFromArray.spec.js
// Do not edit below this line
module.exports = removeFromArray;
