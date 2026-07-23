import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';

import { Selector } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 1000 }).map(() => {
  const value = Mockjs.mock('@guid');
  const title = `${Mockjs.mock('@name')}1`;

  return {
    value,
    label: title,
    description: title,
    id: value,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Selector.AutoCompletePagingSelector
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      bodyStyle={{ overflowY: 'hidden' }}
      value={value}
      onChange={setValue}
      loadData={(_kw, page, limit) => {
        return new Promise((resolve) => {
          if (!_kw) {
            resolve({
              total: 0,
              data: [],
            });
            return;
          }

          const handler = MobileGlobalIndicator.show();

          setTimeout(() => {
            const data = options.filter((t) => t.label.indexOf(_kw) > -1);

            MobileGlobalIndicator.hide(handler);

            resolve({
              total: data.length,
              data: data.slice((page - 1) * limit, page * limit),
            });
          }, 500);
        });
      }}
      pagingSelectorProps={{
        multiple: true,
        columns: 2,
        showCheckMark: true,
        pagingProps: {
          style: { height: '100%' },
          isLocal: false,
        },
      }}
    />
  );
};
