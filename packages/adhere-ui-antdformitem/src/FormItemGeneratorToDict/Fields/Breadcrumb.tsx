import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import BreadcrumbFormItem from '../BreadcrumbFormItem';
import { setItem } from '../ItemFactory';
import { deepDep } from '../util';

setItem('Breadcrumb', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  // @ts-ignore
  return <BreadcrumbFormItem {...props} items={dataSource} />;
});

setItem('BreadcrumbDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  // @ts-ignore
  return <BreadcrumbFormItem {...props} items={data} />;
});

// const FormItemComponents = {};

/**
 * Breadcrumb
 * @description 初始化Breadcrumb
 */
// export default () => {
//   // 名称以Breadcrumb结尾的字典
//   const breadcrumbDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('Breadcrumb'),
//   );
//
//   // 名称以DynamicBreadcrumb结尾的字典
//   const breadcrumbDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('BreadcrumbDynamic'),
//   );
//
//   // 静态的Breadcrumb
//   breadcrumbDictNames.forEach((dictName) => {
//     // breadcrumbFormItem
//     FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
//       const handler = Dict.value[dictName].value;
//
//       let dataSource;
//
//       // 如果是函数(一般是级联)
//       if (handler instanceof Function) {
//         dataSource = handler(cascadeParams);
//       } else {
//         dataSource = handler;
//       }
//
//       // @ts-ignore
//       return <BreadcrumbFormItem {...props} items={dataSource} />;
//     };
//   });
//
//   // 动态的breadcrumbFormItem
//   breadcrumbDynamicDictNames.forEach((dictName) => {
//     // breadcrumbFormItem
//     FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
//       const [data, setData] = useState([]);
//
//       // 存放字典的返回值(可能是promise也可能是Function)
//       const handler = Dict.value[dictName].value;
//
//       useEffect(() => {
//         // 如果是Promise直接返回
//         if (handler.then) {
//           handler.then((res) => {
//             setData(res);
//           });
//         }
//       }, []);
//
//       useEffect(() => {
//         // 如果是函数(一般是级联)
//         if (handler instanceof Function) {
//           handler(cascadeParams).then((res) => {
//             setData(res);
//           });
//         }
//       }, [deepDep(cascadeParams)]);
//
//       // @ts-ignore
//       return <BreadcrumbFormItem {...props} items={data} />;
//     };
//   });
//
//   return FormItemComponents;
// };
