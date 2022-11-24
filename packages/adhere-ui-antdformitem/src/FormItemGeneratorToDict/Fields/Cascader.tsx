import React, { useEffect, useMemo, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import CascaderFormItem from '../CascaderFormItem';
import CascaderMulitFormItem from '../CascaderMulitFormItem';

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

  // CascaderFormItem
  FormItemComponents[`CascaderFormItem`] = ({ dataSource, ...props }) => {
    return <CascaderFormItem {...props} options={dataSource} />;
  };

  // CascaderFormLeafItem
  FormItemComponents[`CascaderLeafFormItem`] = ({ dataSource, ...props }) => {
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

    return <CascaderFormItem {...props} options={targetDataSource} />;
  };

  // CascaderMulitFormItem
  FormItemComponents[`CascaderMulitFormItem`] = ({ dataSource, ...props }) => {
    return <CascaderMulitFormItem {...props} options={dataSource} />;
  };

  // CascaderLeafMulitFormItem
  FormItemComponents[`CascaderLeafMulitFormItem`] = ({ dataSource, ...props }) => {
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

    return <CascaderMulitFormItem {...props} options={targetDataSource} />;
  };

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

      const Component = FormItemComponents[`CascaderFormItem`];
      return <Component {...props} dataSource={dataSource} />;
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

      const Component = FormItemComponents[`CascaderLeafFormItem`];
      return <Component {...props} dataSource={dataSource} />;
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

      const Component = FormItemComponents[`CascaderMulitFormItem`];
      return <Component {...props} dataSource={dataSource} />;
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

      const Component = FormItemComponents[`CascaderLeafMulitFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };
  });

  // 动态的Cascader
  cascaderDynamicDictNames.forEach((selectDictName) => {
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

      const Component = FormItemComponents[`CascaderFormItem`];
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

      const Component = FormItemComponents[`CascaderLeafFormItem`];
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

      const Component = FormItemComponents[`CascaderMulitFormItem`];
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

      const Component = FormItemComponents[`CascaderLeafMulitFormItem`];
      return <Component {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
