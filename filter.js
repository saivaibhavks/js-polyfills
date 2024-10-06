const arr = [10, 34, 21, -90, -2, 0];

Array.prototype.customfilter = function (callbackFn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const filteredArr = arr.customfilter((item, index, arr) => {
  return item < 0;
});

console.log("Filtered Array: ", filteredArr);
