function getRandomIntInclusive (min, max) {
  let number;

  if (min >= 0 && max > min) {
    number = Math.random() * (max - min + 1) + min;
    return Math.floor(number);
  }
  if (min > max) {
    number = Math.random() * (max - min + 1) + min;
    let exchange = min;
    min = max;
    max = exchange;
    return Math.floor(number);
  }
  return Math.floor(number);
}
getRandomIntInclusive(1, 8);

let calculatingNumberDecimalPlaces = function (min, max, signs) {
  let numberSecond;
  let decimalPlaces;

  if (min >= 0 && max > min) {
    numberSecond = Math.random() * (max - min + 1) + min;
    decimalPlaces = numberSecond.toFixed(signs);
    return decimalPlaces;
  }
  if (min > max) {
    numberSecond = Math.random() * (max - min + 1) + min;
    decimalPlaces = numberSecond.toFixed(signs);
    let exchange = min;
    min = max;
    max = exchange;
    return decimalPlaces;
  }
  return decimalPlaces;
};

calculatingNumberDecimalPlaces(2, 8, 5);
