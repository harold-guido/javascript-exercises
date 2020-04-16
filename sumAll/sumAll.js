const sumAll = function (number1, number2) {
  var lowerNumber = 0,
    higherNumber = 0,
    sumOfInbetweenNumbers = 0;
  if (
    number1 < 0 ||
    number2 < 0 ||
    typeof number1 != "number" ||
    typeof number2 != "number"
  ) {
    sumOfInbetweenNumbers = "ERROR";
  } else if (number1 < number2) {
    lowerNumber = number1;
    higherNumber = number2;

    for (counter = lowerNumber; counter <= higherNumber; counter++) {
      sumOfInbetweenNumbers += counter;
    }
  } else {
    lowerNumber = number2;
    higherNumber = number1;

    for (counter = lowerNumber; counter <= higherNumber; counter++) {
      sumOfInbetweenNumbers += counter;
    }
  }

  return sumOfInbetweenNumbers;
};

module.exports = sumAll;
