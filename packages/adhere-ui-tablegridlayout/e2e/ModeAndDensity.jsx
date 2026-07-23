import { Radio } from 'antd';
import React, { useState } from 'react';

import TableGridLayout from '../src/index';

import '../src/index.less';

const { Label, Value } = TableGridLayout;

const sampleData = [
  {
    name: 'g1',
    width: '100%',
    columnCount: 3,
    colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
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
        value: (
          <Value colSpan={3}>
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Value>
        ),
      },
    ],
  },
];

export default () => {
  const [mode, setMode] = useState('parity');
  const [density, setDensity] = useState('default');

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <Radio.Group
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          options={[
            { label: 'normal', value: 'normal' },
            { label: 'parity', value: 'parity' },
            { label: 'bordered', value: 'bordered' },
          ]}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <Radio.Group
          value={density}
          onChange={(e) => setDensity(e.target.value)}
          options={[
            { label: 'default', value: 'default' },
            { label: 'middle', value: 'middle' },
            { label: 'small', value: 'small' },
          ]}
        />
      </div>
      <TableGridLayout bordered mode={mode} density={density} data={sampleData} />
    </div>
  );
};
