import { Radio } from 'antd';
import React, { useState } from 'react';

import TableGridLayout from '../src/index';

import '../src/index.less';

const { Label, Value } = TableGridLayout;

export default () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <Radio.Group
          value={show ? 1 : 0}
          onChange={(e) => setShow(!!e.target.value)}
          optionType="button"
          options={[
            { label: '显示', value: 1 },
            { label: '隐藏', value: 0 },
          ]}
        />
      </div>
      <TableGridLayout
        bordered
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [120, 'auto', 120, 'auto', 120, 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>UserName：</Label>,
                value: <Value>Zhou Maomao</Value>,
                show,
              },
              {
                key: 'Telephone',
                label: <Label>Telephone：</Label>,
                value: <Value>1810000000</Value>,
                show,
              },
              {
                key: 'Live',
                label: <Label>Live：</Label>,
                value: <Value>Hangzhou, Zhejiang</Value>,
                show,
              },
              {
                key: 'Remark',
                label: <Label>Remark：</Label>,
                value: <Value>empty</Value>,
                show: true,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>
                ),
                show: true,
              },
            ],
          },
        ]}
      />
    </div>
  );
};
