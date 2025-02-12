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
              value: <Value>{DateDisplay.DateDisplay2.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY',
              label: <Label>YYYY</Label>,
              value: <Value>{DateDisplay.DateDisplay4.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-M',
              label: <Label>YYYY-M</Label>,
              value: <Value>{DateDisplay.DateDisplay6.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-MM',
              label: <Label>YYYY-MM</Label>,
              value: <Value>{DateDisplay.DateDisplay7.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-M-D',
              label: <Label>YYYY-M-D</Label>,
              value: <Value>{DateDisplay.DateDisplay8.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-MM-DD',
              label: <Label>YYYY-MM-DD</Label>,
              value: <Value>{DateDisplay.DateDisplay10.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-M-D H:m:s',
              label: <Label>YYYY-M-D H:m:s</Label>,
              value: <Value>{DateDisplay.DateDisplay13.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-MM-DD H:m:s',
              label: <Label>YYYY-MM-DD H:m:s</Label>,
              value: <Value>{DateDisplay.DateDisplay15.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-M-D HH:mm:ss',
              label: <Label>YYYY-M-D HH:mm:ss</Label>,
              value: <Value>{DateDisplay.DateDisplay16.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'YYYY-MM-DD HH:mm:ss',
              label: <Label>YYYY-MM-DD HH:mm:ss</Label>,
              value: <Value>{DateDisplay.DateDisplay18.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'FromNow',
              label: <Label>返回现在到当前实例的相对时间：</Label>,
              value: (
                <Value>{DateDisplay.DateDisplayFromNow.toString({ value: Date.now() })}</Value>
              ),
            },
            {
              key: 'ToNow',
              label: <Label>返回当前实例到现在的相对时间：</Label>,
              value: <Value>{DateDisplay.DateDisplayToNow.toString({ value: Date.now() })}</Value>,
            },
            {
              key: 'LT',
              label: <Label>LT</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LT' })}
                </Value>
              ),
            },
            {
              key: 'LTS',
              label: <Label>LTS</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LTS' })}
                </Value>
              ),
            },
            {
              key: 'L',
              label: <Label>L</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'L' })}
                </Value>
              ),
            },
            {
              key: 'LL',
              label: <Label>LL</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LL' })}
                </Value>
              ),
            },
            {
              key: 'LLL',
              label: <Label>LLL</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LLL' })}
                </Value>
              ),
            },
            {
              key: 'LLLL',
              label: <Label>LLLL</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({
                    value: Date.now(),
                    format: 'LLLL',
                  })}
                </Value>
              ),
            },
            {
              key: 'l',
              label: <Label>l</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'l' })}
                </Value>
              ),
            },
            {
              key: 'll',
              label: <Label>ll</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'll' })}
                </Value>
              ),
            },
            {
              key: 'lll',
              label: <Label>lll</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'lll' })}
                </Value>
              ),
            },
            {
              key: 'llll',
              label: <Label>llll</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({
                    value: Date.now(),
                    format: 'llll',
                  })}
                </Value>
              ),
            },
            {
              key: 'L LT',
              label: <Label>L LT</Label>,
              value: (
                <Value>
                  {DateDisplay.DateDisplay.toString({
                    value: Date.now(),
                    format: 'L LT',
                  })}
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  );
};
