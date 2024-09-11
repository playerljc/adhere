import { useUpdateEffect } from 'ahooks';
import Mockjs from 'mockjs';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { CheckList } from '../../src/index';

import '../../src/index.less';

// const options = Array.from({ length: 26 }).map((t, _index) => {
//   const letter = String.fromCharCode(97 + _index).toUpperCase();
//
//   return {
//     title: letter,
//     value: letter,
//   };
// });

const options = Array.from({ length: 100 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = `${Mockjs.mock('@name')}`;

  return {
    title,
    value,
  };
});

export default forwardRef((props, ref) => {
  const [value, setValue] = useState(props.value);

  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));

  useUpdateEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <CheckList.FilterCheckAllCheckList
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%', ...(props.style ?? {}) }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={(val) => {
        setValue(val);
        // props.onChange(val);
      }}
      // onCheckAllChange={setValue}
    />
  );
});
