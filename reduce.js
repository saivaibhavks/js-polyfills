const arr = [0, 1, 1, -22, 3];

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

const sum = arr.myReduce((acc, item, i, arr) => {
  acc += item;
  return acc;
}, 0);

console.log("sum is", sum);
