const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return (num1 > num2) ? num1 - num2 : num2 - num1;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
