function getRandomIntInclusive (min, max) {

  min = Math.abs(min);
  max = Math.abs(max);
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomIntInclusive(1, 8);

const calculatingNumberDecimalPlaces = function (min, max, signs) {

  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min + 1) + min).toFixed(signs);
}

calculatingNumberDecimalPlaces(2, 8, 5);

const getRandom = function () {
  return Math.floor(Math.abs(Math.random));
}

const type = [palace, flat, house, bungalow];

const time = ['12:00', '13:00', '14:00'];

let objFirst = {
  author:{
    avatar: 'img/avatars/user0',
  },
  offer: {
    title: 'Первый',
    price: getRandom,
    type: type[getRandomIntInclusive(0, 3)],
    rooms: getRandom,
    guests: getRandom,
    checkin: time[getRandomIntInclusive(0, 2)],
    checkout: time[getRandomIntInclusive(0, 2)],

    description: 'Уютное и теплое жилище',

  },
  location: {
    x: calculatingNumberDecimalPlaces(35.65000, 35.70000, 5),
    y: calculatingNumberDecimalPlaces(139.70000, 139.80000, 5),
  },
};



let dataTest = [objFirst, objSecond, objThird, objFourth, objFifth, objSixth, objSeventh, objEighth, objNinth, objTenth];

