const arr = [1, 2, 3, 4, [5, [7, 8]]];

Array.prototype.customFlat = function (depth) {
  let res = [];

  if (!Array.isArray(this)) {
    throw new Error("Not valid");
  }
  this.forEach((el) => {
    if (Array.isArray(el)) {
      res.push(...el.customFlat(depth - 1));
    } else {
      res.push(el);
    }
  });

  return res;
};

const ne2w = arr.customFlat(2);

console.log("aa", ne2w);
