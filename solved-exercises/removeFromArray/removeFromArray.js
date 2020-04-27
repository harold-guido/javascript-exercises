const removeFromArray = function () {
  var array = [];
  array = arguments[0];

  for (firstCounter = 0; firstCounter <= array.length - 1; firstCounter++) {
    for (
      secondCounter = 1;
      secondCounter <= arguments.length - 1;
      secondCounter++
    ) {
      if (array[firstCounter] == arguments[secondCounter]) {
        array.splice(firstCounter, 1); // remember splice needs a range
        firstCounter--;
      }
    }
  }

  return array;
};

module.exports = removeFromArray;
