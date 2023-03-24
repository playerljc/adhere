import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import MenuFormItem from '../MenuFormItem';
import { deepDep } from '../util';

const FormItemComponents = {};

/**
 * Menu
 * @description 初始化Menu
 */
export default () => {
  // 名称以Menu结尾的字典
  const menuDictNames = Object.keys(Dict.handlers).filter((dictName) => dictName.endsWith('Menu'));

  // 名称以DynamicMenu结尾的字典
  const menuDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicMenu'),
  );

  // 静态的Menu
  menuDictNames.forEach((dictName) => {
    // menuFormItem
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <MenuFormItem {...props} items={dataSource} />;
    };
  });

  // 动态的menuFormItem
  menuDynamicDictNames.forEach((dictName) => {
    // menuFormItem
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

      return <MenuFormItem {...props} items={data} />;
    };
  });

  return FormItemComponents;
};
