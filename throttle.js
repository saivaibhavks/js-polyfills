const throttle = (func, delay) => {
  let lastTime = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    func(...args);
  };
};

const btnClciked = () => {
  console.log("btn clicked");
};

const btnn = document.querySelector("#btnn");
btnn.addEventListener("click", throttle(btnClciked, 1000));
