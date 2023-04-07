import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import MentionsFormItem from '../MentionsFormItem';
import { deepDep } from '../util';

// const FormItemComponents = {};

/**
 * Mentions
 * @description 初始化Mentions
 */
// export default () => {
// 名称以Mentions结尾的字典
// const mentionsDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//   dictName.endsWith('Mentions'),
// );
//
// // 名称以DynamicMentions结尾的字典
// const mentionsDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//   dictName.endsWith('MentionsDynamic'),
// );

// 静态的Mentions
// mentionsDictNames.forEach((dictName) => {
// mentionsFormItem
setItem('Mentions', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <MentionsFormItem {...props} options={dataSource} />;
});
// });

// 动态的mentionsFormItem
// mentionsDynamicDictNames.forEach((dictName) => {
// mentionsFormItem
setItem('MentionsDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <MentionsFormItem {...props} options={data} />;
});
// });

// return FormItemComponents;
// };
