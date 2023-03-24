import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';
import TreeSelectFormItem from '../TreeSelectFormItem';
import TreeSelectLeafFormItem from '../TreeSelectLeafFormItem';
import TreeSelectLeafMulitFormItem from '../TreeSelectLeafMulitFormItem';
import { deepDep } from '../util';

const FormItemComponents = {};

/**
 * initTreeSelect
 * @description 初始化TreeSelect
 */
export default () => {
  // 名称以Tree结尾的字典
  const treeSelectDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Tree'),
  );

  // 名称以DynamicTree结尾的字典
  const treeSelectDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTree'),
  );

  // treeSelectFormItem
  FormItemComponents[`TreeSelectFormItem`] = ({ dataSource, ...props }) => {
    return <TreeSelectFormItem {...props} treeData={dataSource} /*selectMode="any" */ />;
  };

  // MulitSelectFormItem
  FormItemComponents[`TreeSelectMulitFormItem`] = ({ dataSource, ...props }) => {
    return <TreeMulitSelectFormItem {...props} treeData={dataSource} /*selectMode="any"*/ />;
  };

  // 静态的TreeSelect
  treeSelectDictNames.forEach((selectDictName) => {
    // treeSelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`TreeSelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // treeSelectLeafFormItem
    FormItemComponents[`${selectDictName}LeafFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TreeSelectLeafFormItem {...props} dataSource={dataSource} />;
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`TreeSelectMulitFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // MulitSelectLeafFormItem
    FormItemComponents[`${selectDictName}LeafMulitFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TreeSelectLeafMulitFormItem {...props} dataSource={dataSource} />;
    };
  });

  // 动态的TreeSelect
  treeSelectDynamicDictNames.forEach((selectDictName) => {
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

      const Component = FormItemComponents[`TreeSelectFormItem`];
      return <Component {...props} dataSource={data} />;
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

      return <TreeSelectLeafFormItem {...props} dataSource={data} />;
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

      const Component = FormItemComponents[`TreeSelectMulitFormItem`];
      return <Component {...props} dataSource={data} />;
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

      return <TreeSelectLeafMulitFormItem {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
