function add(num1, num2) {
  return Number(num1 + num2);
}

function subtract(num1, num2) {
  return Number(num1 - num2);
}

function sum(numArray) {
  const sum = numArray.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return sum;
}

function multiply(numArray) {
  const multiplied = numArray.reduce((multiplied, num) => {
    return multiplied * num;
  }, 1);
  return multiplied;
}

function power(num1, num2) {
  return Number(num1 ** num2);
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    var factorialResult = factorial(num - 1);
    factorialResult *= num;
    return factorialResult;
  }
}

// alternative solutions to factorial()

// arrays
// function factorial(num) {
//   const factorialResult = Array.from(Array(num))
//     .map((item, i) => {
//       return num - i;
//     })
//     .reduce((factorial, num) => {
//       return factorial * num;
//     }, 1);
//   return factorialResult;
// }

// loops
// function factorial(num) {
//   let factorialResult = 1;
//   for (i = num; i > 0; i--) {
//     factorialResult *= i;
//   }
//   return factorialResult;
// }

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
