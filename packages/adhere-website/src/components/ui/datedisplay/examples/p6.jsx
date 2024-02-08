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
              key: 'LT',
              label: <Label>LT</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayLT value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'LTS',
              label: <Label>LTS</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayLTS value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'L',
              label: <Label>L</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayL value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'LL',
              label: <Label>LL</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayLL value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'LLL',
              label: <Label>LLL</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayLLL value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'LLLL',
              label: <Label>LLLL</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayLLLL value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'l',
              label: <Label>l</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayl value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'll',
              label: <Label>ll</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayll value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'lll',
              label: <Label>lll</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplaylll value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'llll',
              label: <Label>llll</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayllll value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'LLTS',
              label: <Label>LLTS</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayLLTS value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'LLT',
              label: <Label>LLT</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayLLT value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'lLTS',
              label: <Label>lLTS</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplaylLTS value={new Date()} />
                </Value>
              ),
            },
            {
              key: 'lLT',
              label: <Label>lLT</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplaylLT value={new Date()} />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  );
};
