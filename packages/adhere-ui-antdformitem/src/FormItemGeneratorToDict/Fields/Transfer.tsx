import { Transfer } from 'antd';
import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import TransferSelectFormItem from '../TransferSelectFormItem';

const FormItemComponents = {};

/**
 * initTransfer
 * @description 初始化Transfer
 */
export default () => {
  // 名称以Transfer结尾的字典
  const transferDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Transfer'),
  );

  // 名称以DynamicTransfer结尾的字典
  const transferDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTransfer'),
  );

  // transferFormItem
  FormItemComponents[`TransferFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Transfer
        dataSource={dataSource.map((t) => ({
          ...t,
          key: t.value,
          title: t.label,
          description: t.label,
        }))}
        // @ts-ignore
        render={(item) => item.title}
        targetKeys={props.value}
        {...props}
      />
    );
  };

  // transferSelectFormItem
  FormItemComponents[`TransferSelectFormItem`] = ({ dataSource, ...props }) => {
    // @ts-ignore
    return <TransferSelectFormItem {...props} dataSource={dataSource} />;
  };

  // 静态的Transfer
  transferDictNames.forEach((dictName) => {
    // transferFormItem
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`TransferFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // transferSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`TransferSelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };
  });

  // 动态的transferFormItem
  transferDynamicDictNames.forEach((dictName) => {
    // transferFormItem
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

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

      const Component = FormItemComponents[`TransferFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // transferSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

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

      const Component = FormItemComponents[`TransferSelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
