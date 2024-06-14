const convertToCelsius = function (tempFahrenheit) {
  return Math.round((tempFahrenheit - 32) / 1.8 * 10) / 10;
};

const convertToFahrenheit = function (tempCelcius) {
  return Math.round((tempCelcius * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
