import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import StepsFormItem from '../StepsFormItem';
import { deepDep } from '../util';

const FormItemComponents = {};

/**
 * Steps
 * @description 初始化Steps
 */
export default () => {
  // 名称以Steps结尾的字典
  const stepsDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Steps'),
  );

  // 名称以DynamicSteps结尾的字典
  const stepsDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicSteps'),
  );

  // 静态的Steps
  stepsDictNames.forEach((dictName) => {
    // stepsFormItem
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <StepsFormItem {...props} items={dataSource} />;
    };
  });

  // 动态的stepsFormItem
  stepsDynamicDictNames.forEach((dictName) => {
    // stepsFormItem
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
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

      return <StepsFormItem {...props} items={data} />;
    };
  });

  return FormItemComponents;
};
