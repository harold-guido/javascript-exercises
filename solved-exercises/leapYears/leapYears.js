const leapYears = function (year) {
  var isLeapYear = `${
    year % 400 == 0
      ? "true"
      : year % 100 == 0
      ? ""
      : year % 4 == 0
      ? "true"
      : ""
  }`;
  return Boolean(isLeapYear);
};

module.exports = leapYears;
