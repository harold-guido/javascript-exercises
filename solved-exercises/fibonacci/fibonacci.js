const fibonacci = function (num, prevTerm = 0, currTerm = 1) {
  n = Number(num);
  if (n < 0) {
    return "OOPS";
  }
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return prevTerm + currTerm;
  } else {
    var nextTerm = prevTerm + currTerm;
    var nthTerm = fibonacci(n - 1, currTerm, nextTerm);
  }
  return nthTerm;
};
module.exports = fibonacci;
