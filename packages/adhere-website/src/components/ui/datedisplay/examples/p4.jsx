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
              key: 'format',
              label: <Label>[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay
                    value={Date.now()}
                    format="[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]"
                  />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  );
};
