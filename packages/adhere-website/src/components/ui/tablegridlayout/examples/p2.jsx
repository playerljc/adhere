import React from 'react';

import { TableGridLayout } from '@baifendian/adhere';

const { Label, Value } = TableGridLayout;

export default () => (
  <div>
    <TableGridLayout
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          defaultLabelWidth: 150,
          colgroup: [, 'auto', , 'auto', , 'auto'],
          data: [
            {
              key: 'UserName',
              label: <Label>UserName：</Label>,
              value: <Value>Zhou Maomao</Value>,
            },
            {
              key: 'Telephone',
              label: <Label>Telephone：</Label>,
              value: <Value>1810000000</Value>,
            },
            {
              key: 'Live',
              label: <Label>Live：</Label>,
              value: <Value>Hangzhou, Zhejiang</Value>,
            },
            {
              key: 'Remark',
              label: <Label>Remark：</Label>,
              value: <Value>empty</Value>,
            },
            {
              key: 'Address',
              label: <Label valign="top">Address：</Label>,
              value: <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>,
            },
          ],
        },
      ]}
    />
  </div>
);
