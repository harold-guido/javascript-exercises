const repeatString = function (string, repeats) {
  var repeatedString = "";

  if (repeats >= 0) {
    for (var counter = 1; counter <= repeats; counter += 1) {
      repeatedString += string;
    }
    return repeatedString;
  } else {
    return "ERROR";
  }
};

module.exports = repeatString;
