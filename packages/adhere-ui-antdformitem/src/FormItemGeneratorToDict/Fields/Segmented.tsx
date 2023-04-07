import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import SegmentedFormItem from '../SegmentedFormItem';
import { deepDep } from '../util';

// const FormItemComponents = {};

/**
 * Segmented
 * @description 初始化Segmented
 */
// export default () => {
//   // 名称以Segmented结尾的字典
//   const segmentedDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('Segmented'),
//   );
//
//   // 名称以DynamicSegmented结尾的字典
//   const segmentedDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('SegmentedDynamic'),
//   );

// 静态的Segmented
// segmentedDictNames.forEach((dictName) => {
// segmentedFormItem
setItem('Segmented', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <SegmentedFormItem {...props} options={dataSource} />;
});
// });

// 动态的segmentedFormItem
// segmentedDynamicDictNames.forEach((dictName) => {
// segmentedFormItem
setItem('SegmentedDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <SegmentedFormItem {...props} options={data} />;
});
// });

// return FormItemComponents;
// };
