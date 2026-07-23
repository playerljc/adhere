import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 1000 }).map(() => {
  const value = Mockjs.mock('@guid');

  return {
    value,
    title: `${Mockjs.mock('@name')}1`,
    id: value,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.AutoCompletePagingCheckList
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
            const data = options.filter((t) => t.title.indexOf(_kw) > -1);

            MobileGlobalIndicator.hide(handler);

            resolve({
              total: data.length,
              data: data.slice((page - 1) * limit, page * limit),
            });
          }, 500);
        });
      }}
      pagingCheckListProps={{
        multiple: true,
        pagingProps: {
          style: { height: '100%' },
          isLocal: false,
        },
      }}
    />
  );
};
