import { useMount, useUpdateEffect } from 'ahooks';
import React, { useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import AutoCompleteFormItem from '../AutoCompleteFormItem';
import { setItem } from '../ItemFactory';
import { deepDep } from '../util';

/**
 * AutoComplete
 */
setItem('AutoComplete', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <AutoCompleteFormItem {...props} dataSource={dataSource} />;
});

/**
 * AutoCompleteDynamic
 */
setItem('AutoCompleteDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useMount(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  });

  useUpdateEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <AutoCompleteFormItem {...props} dataSource={data} />;
});
