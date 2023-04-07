import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import TransferFormItem from '../TransferFormItem';
import TransferSelectFormItem from '../TransferSelectFormItem';
import { deepDep } from '../util';

// const FormItemComponents = {};

/**
 * initTransfer
 * @description 初始化Transfer
 */
// export default () => {
//   // 名称以Transfer结尾的字典
//   const transferDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('Transfer'),
//   );
//
//   // 名称以DynamicTransfer结尾的字典
//   const transferDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('TransferDynamic'),
//   );

// 静态的Transfer
// transferDictNames.forEach((dictName) => {
// transferFormItem
setItem('Transfer', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TransferFormItem {...props} dataSource={dataSource} />;
});

// transferSelectFormItem
setItem('Transfer', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TransferSelectFormItem {...props} dataSource={dataSource} />;
});
// });

// 动态的transferFormItem
// transferDynamicDictNames.forEach((dictName) => {
// transferFormItem
setItem('TransferDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TransferFormItem {...props} dataSource={data} />;
});

// transferSelectFormItem
setItem('TransferDynamic', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TransferSelectFormItem {...props} dataSource={data} />;
});
// });

// return FormItemComponents;
// };
