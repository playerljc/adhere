import { useMount, useUpdateEffect } from 'ahooks';
import React, { useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import StepsFormItem from '../StepsFormItem';
import { deepDep } from '../util';

/**
 * StepsFormItem
 */
setItem('Steps', 'FormItem', (dictName) => ({ cascadeParams, onDataSourceChange, ...props }) => {
  const handler = Dict.value[dictName].value;

  const [dataSource, setDataSource] = useState([]);

  function loadData() {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      setDataSource(handler(cascadeParams));
    } else {
      setDataSource(handler);
    }
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [deepDep(cascadeParams)]);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  return <StepsFormItem {...props} items={dataSource} />;
});

/**
 * StepsDynamicFormItem
 */
setItem(
  'StepsDynamic',
  'FormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      function loadData() {
        // 如果是Promise直接返回
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        } else if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      return <StepsFormItem {...props} items={data} />;
    },
);
