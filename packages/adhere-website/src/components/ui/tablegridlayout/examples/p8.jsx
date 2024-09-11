import { Radio } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender, Space, TableGridLayout } from '@baifendian/adhere';

const { Label, Value } = TableGridLayout;

export default () => {
  const [layout, setLayout] = useState('horizontal');

  return (
    <Space.Group>
      <div>
        <Radio.Group
          onChange={(e) => {
            setLayout(e.target.value);
          }}
          value={layout}
          options={[
            { label: 'horizontal', value: 'horizontal' },
            { label: 'vertical', value: 'vertical' },
          ]}
        />
      </div>
      <ConditionalRender
        conditional={layout === 'vertical'}
        noMatch={() => (
          <TableGridLayout
            bordered
            mode="parity"
            data={[
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
            ]}
          />
        )}
      >
        {() => (
          <TableGridLayout
            bordered
            parity
            layout="vertical"
            data={[
              {
                name: 'g1',
                width: '100%',
                columnCount: 3,
                colgroup: ['auto', 'auto', 'auto'],
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
                    label: (
                      <Label colSpan={2} valign="top">
                        Address：
                      </Label>
                    ),
                    value: (
                      <Value colSpan={2}>
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                      </Value>
                    ),
                  },
                ],
              },
            ]}
          />
        )}
      </ConditionalRender>
    </Space.Group>
  );
};
