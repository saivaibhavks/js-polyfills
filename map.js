let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.mapPolyfill = function (callbackFn) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(callbackFn(this[i], i, this));
  }
  return temp;
};

const newArr = arr.mapPolyfill((item, index, arr) => {
  return item * 5;
});

console.log("modifiedArr", newArr);
