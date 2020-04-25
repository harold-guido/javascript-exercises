const palindromes = function (string) {
  const stripString = string
    .split("")
    .filter((char) => {
      return char.match(/[a-z]/i);
    })
    .join("")
    .toLowerCase();

  const reversedString = stripString
    .split("")
    .map((char, i) => {
      return stripString[stripString.length - 1 - i];
    })
    .join("");
  return stripString == reversedString;
};
module.exports = palindromes;
