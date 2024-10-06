const search = document.querySelector("#searchInput");

function debounce(func, delay) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const myFunc = (e) => {
  console.log("func tion called", e.target.value);
};

search.addEventListener("input", debounce(myFunc, 5000));
