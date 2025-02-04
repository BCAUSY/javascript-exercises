const convertToCelsius = function(num) {
  let celsius = ((num - 32) * (5 / 9)).toFixed(1);
  return Number(celsius);
};

const convertToFahrenheit = function(num) {
  let fahrenheit = (num * (9 / 5) + 32).toFixed(1);
  return parseFloat(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
