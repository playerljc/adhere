import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import AutoCompleteFormItem from '../AutoCompleteFormItem';

const FormItemComponents = {};

export default () => {
  // 名称以AutoComplete结尾的字典
  const autoCompleteDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('AutoComplete'),
  );

  // 名称以DynamicAutoComplete结尾的字典
  const autoCompleteDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicAutoComplete'),
  );

  // 静态的AutoComplete
  autoCompleteDictNames.forEach((autoCompleteDictName) => {
    // AutoCompleteFormItem
    FormItemComponents[`${autoCompleteDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[autoCompleteDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <AutoCompleteFormItem {...props} dataSource={dataSource} />;
    };
  });

  // 动态的Select
  autoCompleteDynamicDictNames.forEach((autoCompleteDictName) => {
    // AutoCompleteFormItem
    FormItemComponents[`${autoCompleteDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[autoCompleteDictName].value;

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
      }, [cascadeParams]);

      return <AutoCompleteFormItem {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
