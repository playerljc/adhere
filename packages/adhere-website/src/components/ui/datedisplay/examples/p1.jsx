import React from 'react';

import { DateDisplay, TableGridLayout } from '@baifendian/adhere';

const { Label, Value } = TableGridLayout;

export default () => {
  return (
    <TableGridLayout
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'YY',
              label: <Label>YY</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay2 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY',
              label: <Label>YYYY</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay4 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-M',
              label: <Label>YYYY-M</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay6 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-MM',
              label: <Label>YYYY-MM</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay7 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-M-D',
              label: <Label>YYYY-M-D</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay8 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-MM-DD',
              label: <Label>YYYY-MM-DD</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay10 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-M-D H:m:s',
              label: <Label>YYYY-M-D H:m:s</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay13 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-MM-DD H:m:s',
              label: <Label>YYYY-MM-DD H:m:s</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay15 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-M-D HH:mm:ss',
              label: <Label>YYYY-M-D HH:mm:ss</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay16 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-MM-DD HH:mm:ss',
              label: <Label>YYYY-MM-DD HH:mm:ss</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay18 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'FromNow',
              label: <Label>返回现在到当前实例的相对时间：</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayFromNow value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'ToNow',
              label: <Label>返回当前实例到现在的相对时间：</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayToNow value={Date.now()} />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  );
};
