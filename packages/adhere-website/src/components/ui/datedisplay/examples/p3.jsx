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
          colgroup: [, 'auto'],
          data: [
            {
              key: 'LT',
              label: <Label>LT</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="LT" />
                </Value>
              ),
            },
            {
              key: 'LTS',
              label: <Label>LTS</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="LTS" />
                </Value>
              ),
            },
            {
              key: 'L',
              label: <Label>L</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="L" />
                </Value>
              ),
            },
            {
              key: 'LL',
              label: <Label>LL</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="LL" />
                </Value>
              ),
            },
            {
              key: 'LLL',
              label: <Label>LLL</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="LLL" />
                </Value>
              ),
            },
            {
              key: 'LLLL',
              label: <Label>LLLL</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="LLLL" />
                </Value>
              ),
            },
            {
              key: 'l',
              label: <Label>l</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="l" />
                </Value>
              ),
            },
            {
              key: 'll',
              label: <Label>ll</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="ll" />
                </Value>
              ),
            },
            {
              key: 'lll',
              label: <Label>lll</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="lll" />
                </Value>
              ),
            },
            {
              key: 'llll',
              label: <Label>llll</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="llll" />
                </Value>
              ),
            },
            {
              key: 'L LT',
              label: <Label>L LT</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay value={Date.now()} format="L LT" />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  );
};
