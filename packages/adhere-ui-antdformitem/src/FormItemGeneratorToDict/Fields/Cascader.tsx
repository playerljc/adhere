import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import CascaderFormItem from '../CascaderFormItem';
import CascaderLeafFormItem from '../CascaderLeafFormItem';
import CascaderLeafMulitFormItem from '../CascaderLeafMulitFormItem';
import CascaderMulitFormItem from '../CascaderMulitFormItem';
import { deepDep } from '../util';

const FormItemComponents = {};

export default () => {
  // 名称以Cascader结尾的字典
  const cascaderDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Cascader'),
  );

  // 名称以DynamicCascader结尾的字典
  const cascaderDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicCascader'),
  );

  // 静态的Cascader
  cascaderDictNames.forEach((selectDictName) => {
    // CascaderFormItem
    FormItemComponents[`${selectDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <CascaderFormItem {...props} options={dataSource} />;
    };

    // CascaderLeafFormItem
    FormItemComponents[`${selectDictName}LeafFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <CascaderLeafFormItem {...props} dataSource={dataSource} />;
    };

    // CascaderMulitFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <CascaderMulitFormItem {...props} options={dataSource} />;
    };

    // CascaderLeafMulitFormItem
    FormItemComponents[`${selectDictName}LeafMulitFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <CascaderLeafMulitFormItem {...props} dataSource={dataSource} />;
    };
  });

  // 动态的Cascader
  cascaderDynamicDictNames.forEach((selectDictName) => {
    // treeSelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

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

      return <CascaderFormItem {...props} options={data} />;
    };

    // treeSelectLeafFormItem
    FormItemComponents[`${selectDictName}LeafFormItem`] = ({ cascadeParams, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

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

      return <CascaderLeafFormItem {...props} dataSource={data} />;
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = ({ cascadeParams, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

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

      return <CascaderMulitFormItem {...props} options={data} />;
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}LeafMulitFormItem`] = ({ cascadeParams, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

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

      return <CascaderLeafMulitFormItem {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
