import React from 'react';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    title: letter,
    value: letter,
  };
});

export default () => {
  return <CheckList options={options} />;
};
