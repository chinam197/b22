Array.prototype.reduce2 = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce2(function (prev, current) {
  console.log(current);
});

