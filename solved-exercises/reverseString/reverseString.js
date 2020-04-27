const reverseString = function (string) {
  var reversedString = "";
  for (counter = string.length - 1; counter >= 0; counter--) {
    reversedString += string[counter];
  }
  return reversedString;
};
module.exports = reverseString;
