function getRandomIntInclusive (min, max) {

  min = Math.abs(min);
  max = Math.abs(max);
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomIntInclusive(1, 8);

let calculatingNumberDecimalPlaces = function (min, max, signs) {

  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min + 1) + min).toFixed(signs);
};

calculatingNumberDecimalPlaces(2, 8, 5);
