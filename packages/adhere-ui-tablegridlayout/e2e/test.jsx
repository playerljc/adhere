import React from 'react';

import TableGridLayout from '../src/index';

import '../src/index.less';

const { Label, Value } = TableGridLayout;

export default () => {
  return (
    <TableGridLayout
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [, 'auto', , 'auto', , 'auto'],
          data: [
            {
              key: 'UserName',
              label: <Label>UserName：</Label>,
              value: <Value>Zhou Maomao</Value>,
              show: true,
            },
            {
              key: 'Telephone',
              label: <Label>Telephone：</Label>,
              value: <Value>1810000000</Value>,
              show: false,
            },
            {
              key: 'Live',
              label: <Label>Live：</Label>,
              value: <Value>Hangzhou, Zhejiang</Value>,
              show: false,
            },
            {
              key: 'Remark',
              label: <Label>Remark：</Label>,
              value: <Value>empty</Value>,
              show: false,
            },
            {
              key: 'Address',
              label: <Label valign="top">Address：</Label>,
              value: <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>,
              show: false,
            },
          ],
        },
        {
          name: 'g2',
          width: '100%',
          columnCount: 3,
          colgroup: [, 'auto', , 'auto', , 'auto'],
          data: [
            {
              key: 'UserName',
              label: <Label>UserName：</Label>,
              value: <Value>Zhou Maomao</Value>,
              show: false,
            },
            {
              key: 'Telephone',
              label: <Label>Telephone：</Label>,
              value: <Value>1810000000</Value>,
              show: true,
            },
            {
              key: 'Live',
              label: <Label>Live：</Label>,
              value: <Value>Hangzhou, Zhejiang</Value>,
              show: false,
            },
            {
              key: 'Remark',
              label: <Label>Remark：</Label>,
              value: <Value>empty</Value>,
              show: false,
            },
            {
              key: 'Address',
              label: <Label valign="top">Address：</Label>,
              value: <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>,
              show: false,
            },
          ],
        },
      ]}
    />
  );
};
