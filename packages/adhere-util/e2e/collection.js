import Collection from '../src/collection';

function fun1(a, b) {
  console.log('fun1');
  return Promise.resolve(a + b);
}

function fun2(a, b) {
  console.log('fun2');
  return Promise.reject('fun2异常了');
}

function fun3(a, b) {
  console.log('fun3');
  return Promise.resolve(a + b);
}

Collection.processAsyncQueue([
  {
    argv: [1, 2],
    run: fun1,
    success: (res) => {
      console.log(res);
    },
    fail: (res) => {
      console.log(res);
    },
  },
  {
    argv: [5, 6],
    run: fun2,
    success: (res) => {
      console.log(res);
    },
    fail: (res) => {
      console.log(res);
    },
  },
  {
    argv: [9, 10],
    run: fun3,
    success: (res) => {
      console.log(res);
    },
    fail: (res) => {
      console.log(res);
    },
  },
])
  .then(() => {
    console.log('end');
  })
  .catch((err) => {
    console.log('err', err);
  });
