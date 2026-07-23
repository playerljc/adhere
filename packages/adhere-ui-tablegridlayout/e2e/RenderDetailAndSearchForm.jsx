import { Button, Space } from 'antd';
import React, { useState } from 'react';

import TableGridLayout from '../src/index';

import '../src/index.less';

const { Label, Value } = TableGridLayout;

const data = [
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
        show: false,
      },
      {
        key: 'Address',
        label: <Label valign="top">Address：</Label>,
        value: <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>,
      },
    ],
  },
];

export default () => {
  const [detail, setDetail] = useState('');

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            const result = TableGridLayout.getRenderDetail(data, {
              layout: 'horizontal',
              mode: 'bordered',
              bordered: true,
            });
            setDetail(JSON.stringify(result, null, 2));
          }}
        >
          getRenderDetail
        </Button>
      </Space>
      <pre style={{ padding: 12, background: '#f5f5f5', minHeight: 120, marginBottom: 16 }}>
        {detail || 'click getRenderDetail...'}
      </pre>
      {TableGridLayout.renderGridSearchFormGroup(data, {
        layout: 'horizontal',
        mode: 'bordered',
        bordered: true,
      })}
    </div>
  );
};
