'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

// console.dir(random(10,10))
module.exports = { random };
