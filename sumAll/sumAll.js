const sumAll = function (lowerNumber, higherNumber) {
  var sumOfInbetweenNumbers = 0;
  if (
    lowerNumber < 0 ||
    higherNumber < 0 ||
    typeof lowerNumber != "number" ||
    typeof higherNumber != "number"
  )
    return "ERROR";

  if (lowerNumber > higherNumber) {
    var temp = lowerNumber;
    lowerNumber = higherNumber;
    higherNumber = temp;
  }

  for (counter = lowerNumber; counter <= higherNumber; counter++) {
    sumOfInbetweenNumbers += counter;
  }

  return sumOfInbetweenNumbers;
};

module.exports = sumAll;
