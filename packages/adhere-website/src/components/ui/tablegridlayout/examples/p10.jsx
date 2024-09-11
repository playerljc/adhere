import { Radio } from 'antd';
import React, { useState } from 'react';

import { Space, TableGridLayout } from '@baifendian/adhere';

const { Label, Value } = TableGridLayout;

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Space.Group direction="vertical">
      <div>
        <Radio.Group value={show ? 1 : 0} onChange={(e) => setShow(e.target.value)}>
          <Radio.Button value={1}>显示</Radio.Button>
          <Radio.Button value={0}>隐藏</Radio.Button>
        </Radio.Group>
      </div>
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
                show,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>
                ),
                show,
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
                show,
              },
              {
                key: 'Address',
                label: <Label valign="top">Address：</Label>,
                value: (
                  <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>
                ),
                show,
              },
            ],
          },
        ]}
      />
    </Space.Group>
  );
};
