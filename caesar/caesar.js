const shiftChar = function (code, num1, num2, num3) {
  var shiftedChar = String.fromCharCode(code);
  if (code >= num1 && code <= num2) {
    if (code + num3 > num2) {
      shiftedChar = String.fromCharCode(num1 - 1 + (code + num3 - num2));
    } else if (code + num3 < num1) {
      shiftedChar = String.fromCharCode(num2 + 1 - (num1 - (code + num3)));
    } else {
      shiftedChar = String.fromCharCode(code + num3);
    }
  }
  return shiftedChar;
};

const caesar = function (string, num) {
  const charArray = Array.from(Array(string.length)).map((char, i) => {
    return string[i];
  });
  for (i = 0; i < charArray.length; i++) {
    charArray[i] = shiftChar(
      charArray[i].charCodeAt(0),
      65,
      90,
      num / 27 < 1 && num / 27 > -1 ? num : num % 26
    );
    charArray[i] = shiftChar(
      charArray[i].charCodeAt(0),
      97,
      122,
      num / 27 < 1 && num / 27 > -1 ? num : num % 26
    );
  }
  return charArray.join("");
};
module.exports = caesar;
