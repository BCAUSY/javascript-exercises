const add = function(number1, number2) {
	return number1 + number2
}
const subtract = function(number1, number2) {
	return number1 - number2
};

const sum = function(arr) {
	return Number(arr.reduce((sum, current) => sum + current, 0));
  
};

const multiply = function(arr) {
  return Number(arr.reduce((mnozna, mnoznik) => mnozna * mnoznik));
};

const power = function(number1, number2) {
 return number1 ** number2
};

const factorial = function(number) {
  let fakto = 1;
  for (let i = 1; i <= number; i++){
    number *= i;
  }
  return fakto;
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
