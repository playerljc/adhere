import React, { useState } from 'react';

import { CascaderView } from '@baifendian/adhere-mobile-ui-anthoc';
import Mock from '@baifendian/adhere-mock';

import './index.less';

// 正常
// const options = Mock.Province.map((t) => ({
//   label: t.name,
//   value: t.id,
// }));

// 拉平
const options = Mock.Province.map((t) => ({
  label: t.name,
  value: t.id,
  pId: 0,
}));

const objs = {
  ...Mock.City,
  ...Mock.County,
};

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CascaderView.AsyncCascaderView
      // options={options}
      isEveryAsync
      value={value}
      treeDataSimpleMode
      onChange={(_value) => {
        setValue(_value);
      }}
      loadData={(defaultId) => {
        return new Promise((resolve, reject) => {
          // 正常
          // if (!objs[defaultId]) {
          //   reject();
          // } else {
          //   setTimeout(() => {
          //     resolve(
          //       objs[defaultId].map((t) => ({
          //         label: t.name,
          //         value: t.id,
          //       })),
          //     );
          //   }, 1000);
          // }
          // 拉平
          if (!defaultId) {
            resolve(options);
          } else if (!objs[defaultId]) {
            reject();
          } else {
            setTimeout(() => {
              resolve(
                objs[defaultId].map((t) => ({
                  label: t.name,
                  value: t.id,
                  pid: defaultId,
                })),
              );
            }, 1000);
          }
        });
      }}
    />
  );
};
