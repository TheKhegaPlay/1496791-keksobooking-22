function getRandomIntInclusive (min, max) {
  let number = Math.random() * (max - min + 1) + min;
  return Math.floor(number); //Максимум и минимум включаются
}
getRandomIntInclusive(1, 8);

let calculatingNumberDecimalPlaces = function (min, max, signs) {
  let numberSecond = Math.random() * (max - min + 1) + min;
  let decimalPlaces = numberSecond.toFixed(signs);

  if (min >= 0, max > min) {
    return decimalPlaces;
  }
  if (min > max) {
    decimalPlaces = false;
  }

  return decimalPlaces;
};

calculatingNumberDecimalPlaces(-2, -1, 5)

if (calculatingNumberDecimalPlaces >= 0) {
  console.log('Результат:' + calculatingNumberDecimalPlaces(-2, -1, 5));
} else {
  console.log('Ошибка');
}
