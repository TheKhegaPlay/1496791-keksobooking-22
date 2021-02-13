function getRandomIntInclusive (min, max) {
  let number = Math.random() * (max - min + 1) + min;

  if (min >= 0 && max > min) {
    return Math.floor(number);
  }
  if (min > max) {
    let exchange = min;
    min = max;
    max = exchange;
    return Math.floor(number);
  }
  if (min === max) {
    return Math.floor(min);
  }
  return Math.floor(number);
}
getRandomIntInclusive(1, 8);

let calculatingNumberDecimalPlaces = function (min, max, signs) {
  let numberSecond = Math.random() * (max - min + 1) + min;
  let decimalPlaces = numberSecond.toFixed(signs);

  if (min >= 0 && max > min) {
    return decimalPlaces;
  }
  if (min > max) {
    let exchange = min;
    min = max;
    max = exchange;
    return decimalPlaces;
  }
  if (min === max) {
    return min;
  }
  return decimalPlaces;
};

calculatingNumberDecimalPlaces(2, 8, 5);

