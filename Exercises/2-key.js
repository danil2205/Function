'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const len = possible.length;
  for (let i = 0; i < length; i++) {
    const s = Math.floor(Math.random() * len);
    key += possible[s];
  }
  return key;
};

module.exports = { generateKey };
