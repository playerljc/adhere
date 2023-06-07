import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import DropdownFormItem from '../DropdownFormItem';
import { setItem } from '../ItemFactory';
import { deepDep } from '../util';

// const FormItemComponents = {};

/**
 * Dropdown
 * @description 初始化Dropdown
 */
// export default () => {
// // 名称以Dropdown结尾的字典
// const dropdownDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//   dictName.endsWith('Dropdown'),
// );
//
// // 名称以DynamicDropdown结尾的字典
// const dropdownDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//   dictName.endsWith('DropdownDynamic'),
// );

// 静态的Dropdown
// dropdownDictNames.forEach((dictName) => {
// dropdownFormItem
setItem('Dropdown', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return (
    <DropdownFormItem
      {...props}
      menu={{
        ...(props.menu ?? {}),
        items: dataSource,
      }}
    />
  );
});
// });

// 动态的dropdownFormItem
// dropdownDynamicDictNames.forEach((dictName) => {
// dropdownFormItem
setItem('DropdownDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useEffect(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  }, []);

  useEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return (
    <DropdownFormItem
      {...props}
      menu={{
        ...(props.menu ?? {}),
        items: data,
      }}
    />
  );
});
// });

// return FormItemComponents;
// };
