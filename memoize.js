function memoize(callbackFunction, context) {
  let res = {};

  return function (...args) {
    let cache = JSON.stringify(args);
    if (!res[cache]) {
      res[cache] = callbackFunction.call(context || this, ...args);
    }

    return res[cache];
  };
}

const square = (n1, n2) => {
  for (let i = 0; i < 1000000000; i++) {}
  return n1 * n2;
};

const memoizedSquare = memoize(square);

console.time("first call");
console.log(memoizedSquare(9873, 97632));
console.timeEnd("first call");

// If you want to use the same label again:
console.time("second call22"); // Start a new timer with the same label

console.log(memoizedSquare(9873, 97632));

console.timeEnd("second call22"); // End the new timer
