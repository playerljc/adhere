import { Radio } from 'antd';
import React, { useState } from 'react';

import TableGridLayout from '../src/index';

import '../src/index.less';

const { Label, Value } = TableGridLayout;

export default () => {
  const [requirePosition, setRequirePosition] = useState('before');
  const [layout, setLayout] = useState('horizontal');

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <Radio.Group
          value={requirePosition}
          onChange={(e) => setRequirePosition(e.target.value)}
          options={[
            { label: 'before（* 在前）', value: 'before' },
            { label: 'after（* 在后）', value: 'after' },
          ]}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <Radio.Group
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          options={[
            { label: 'horizontal', value: 'horizontal' },
            { label: 'vertical', value: 'vertical' },
          ]}
        />
      </div>
      <TableGridLayout
        bordered
        layout={layout}
        requirePosition={requirePosition}
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [140, 'auto', 140, 'auto', 140, 'auto'],
            data: [
              {
                key: 'UserName',
                require: true,
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
              },
              {
                key: 'Telephone',
                require: true,
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
              },
              {
                key: 'Live',
                require: true,
                requirePosition: 'before',
                label: <Label>Live（行级 before）：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
              },
              {
                key: 'Remark',
                require: true,
                requirePosition: 'after',
                label: <Label>Remark（行级 after）：</Label>,
                value: <Value>empty</Value>,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </div>
  );
};
