import React, { useState } from 'react';

import Mock from '@baifendian/adhere-mock';

import { CascaderView } from '../../src/index';

import './index.less';

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
      isEveryAsync
      value={value}
      treeDataSimpleMode
      onChange={setValue}
      loadData={(defaultId) => {
        return new Promise((resolve, reject) => {
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
