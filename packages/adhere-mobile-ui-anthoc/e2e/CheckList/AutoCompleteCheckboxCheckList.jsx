import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 100 }).map(() => {
  const value = Mockjs.mock('@guid');

  return {
    value,
    title: Mockjs.mock('@name'),
    id: value,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.AutoCompleteCheckboxCheckList
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      bodyStyle={{ overflowY: 'hidden' }}
      value={value}
      onChange={setValue}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            resolve([]);
            return;
          }

          const handler = MobileGlobalIndicator.show();

          setTimeout(() => {
            MobileGlobalIndicator.hide(handler);
            resolve(options.filter((t) => t.title.indexOf(_kw) > -1));
          }, 500);
        });
      }}
      checkListProps={{
        multiple: true,
      }}
    />
  );
};
