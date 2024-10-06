const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 Resolved");
  }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 Resolved");
  }, 6000);
});

Promise.allSettled([promise1, promise2, promise3])
  .then((res) => {
    console.log("resp is ", res);
  })
  .catch((err) => {
    console.log("resp is ", err);
  });
