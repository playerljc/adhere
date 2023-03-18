import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import TimelineFormItem from '../TimelineFormItem';

const FormItemComponents = {};

/**
 * Timeline
 * @description 初始化Timeline
 */
export default () => {
  // 名称以Timeline结尾的字典
  const timelineDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Timeline'),
  );

  // 名称以DynamicTimeline结尾的字典
  const timelineDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTimeline'),
  );

  // 静态的Timeline
  timelineDictNames.forEach((dictName) => {
    // timelineFormItem
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TimelineFormItem {...props} items={dataSource} />;
    };
  });

  // 动态的timelineFormItem
  timelineDynamicDictNames.forEach((dictName) => {
    // timelineFormItem
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
      }, [cascadeParams]);

      return <TimelineFormItem {...props} items={data} />;
    };
  });

  return FormItemComponents;
};
