function getRandomIntInclusive (min, max) {

  if (min < 0 || max < 0 || min < 0, max < 0) {
    min = Math.abs(min);
    max = Math.abs(max);
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomIntInclusive(1, 8);

let calculatingNumberDecimalPlaces = function (min, max, signs) {

  if (min < 0 || max < 0 || min < 0 && max < 0) {
    min = Math.abs(min);
    max = Math.abs(max);
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.random() * (max - min + 1) + min.toFixed(signs);
};

calculatingNumberDecimalPlaces(2, 8, 5);
