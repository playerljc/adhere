import React, { useEffect, useMemo, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';
import TreeSelectFormItem from '../TreeSelectFormItem';

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

  // treeSelectLeafFormItem
  FormItemComponents[`TreeSelectLeafFormItem`] = ({ dataSource, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const targetDataSource = useMemo(() => {
      function loop(nodes) {
        (nodes || []).forEach((node) => {
          if ('leaf' in node && node.leaf) {
            node.disabled = false;
          } else {
            node.disabled = true;
          }

          loop(node.children);
        });
      }

      const source = JSON.parse(JSON.stringify(dataSource));

      loop(source);

      return source;
    }, [dataSource]);

    return <TreeSelectFormItem {...props} treeData={targetDataSource} /*selectMode="leaf"*/ />;
  };

  // MulitSelectFormItem
  FormItemComponents[`TreeSelectMulitFormItem`] = ({ dataSource, ...props }) => {
    return <TreeMulitSelectFormItem {...props} treeData={dataSource} /*selectMode="any"*/ />;
  };

  // MulitSelectLeafFormItem
  FormItemComponents[`TreeSelectLeafMulitFormItem`] = ({ dataSource, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const targetDataSource = useMemo(() => {
      function loop(nodes) {
        (nodes || []).forEach((node) => {
          if ('leaf' in node && node.leaf) {
            node.disabled = false;
          } else {
            node.disabled = true;
          }

          loop(node.children);
        });
      }

      const source = JSON.parse(JSON.stringify(dataSource));

      loop(source);

      return source;
    }, [dataSource]);

    return <TreeMulitSelectFormItem {...props} treeData={targetDataSource} /*selectMode="leaf"*/ />;
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

      const Component = FormItemComponents[`TreeSelectLeafFormItem`];
      return <Component {...props} dataSource={dataSource} />;
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

      const Component = FormItemComponents[`TreeSelectLeafMulitFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };
  });

  // 动态的TreeSelect
  treeSelectDynamicDictNames.forEach((selectDictName) => {
    // treeSelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是Promise直接返回
        if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }, []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        }
      }, [cascadeParams]);

      const Component = FormItemComponents[`TreeSelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // treeSelectLeafFormItem
    FormItemComponents[`${selectDictName}LeafFormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是Promise直接返回
        if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }, []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        }
      }, [cascadeParams]);

      const Component = FormItemComponents[`TreeSelectLeafFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是Promise直接返回
        if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }, []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        }
      }, [cascadeParams]);

      const Component = FormItemComponents[`TreeSelectMulitFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}LeafMulitFormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是Promise直接返回
        if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }, []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        }
      }, [cascadeParams]);

      const Component = FormItemComponents[`TreeSelectLeafMulitFormItem`];
      return <Component {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
