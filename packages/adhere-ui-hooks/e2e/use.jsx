import React from 'react';

import Hooks from '../src';

const { use } = Hooks;

function loadData(...args) {
  // console.log('111', args);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

export default () => {
  // debugger;
  const { data, isPending, isValidate, reset } = use(loadData, [1, 2, 3]);

  // console.log('data', data);
  // console.log('isPending', isPending);
  // console.log('isValidate', isValidate);
  return (
    <div
      onClick={() => {
        reset(4, 5, 6);
      }}
    >
      reset
    </div>
  );
};
