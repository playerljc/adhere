import React from 'react';

import TableGridLayout from '../src/index';

import '../src/index.less';

const { Label, Value } = TableGridLayout;

export default () => {
  return (
    <TableGridLayout
      bordered
      mode="bordered"
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [150, 'auto', 150, 'auto', 150, 'auto'],
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
              // show: false,
            },
            {
              key: 'Remark',
              label: <Label>Remark：</Label>,
              value: <Value>empty</Value>,
              // show: false,
            },
            {
              key: 'Address',
              label: <Label valign="top">Address：</Label>,
              value: (
                <Value colSpan={5}>
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Value>
              ),
              // show: false,
            },
          ],
        },
        {
          name: 'g2',
          width: '100%',
          columnCount: 3,
          colgroup: [150, 'auto', 150, 'auto', 150, 'auto'],
          data: [
            {
              key: 'UserName',
              label: <Label>UserName：</Label>,
              value: <Value>Zhou Maomao</Value>,
              // show: false,
            },
            {
              key: 'Telephone',
              label: <Label>Telephone：</Label>,
              value: <Value>1810000000</Value>,
              // show: true,
            },
            {
              key: 'Live',
              label: <Label>Live：</Label>,
              value: <Value>Hangzhou, Zhejiang</Value>,
              // show: false,
            },
            {
              key: 'Remark',
              label: <Label>Remark：</Label>,
              value: <Value>empty</Value>,
              // show: false,
            },
            {
              key: 'Address',
              label: <Label valign="top">Address：</Label>,
              value: (
                <Value colSpan={3}>
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Value>
              ),
              // show: false,
            },
          ],
        },
      ]}
    />
  );
};
