import React from 'react';

import { Checkbox } from '@baifendian/adhere-mobile-ui-anthoc';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    title: letter,
    value: letter,
    children: letter,
  };
});

export default () => {
  return <Checkbox.CheckboxGroup options={options} spaceStyle={{ '--gap': '24px' }} />;
};
