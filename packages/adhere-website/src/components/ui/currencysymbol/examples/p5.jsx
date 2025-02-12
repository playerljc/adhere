import React from 'react';

import { CurrencySymbol } from '@baifendian/adhere';

export default () => {
  return (
    <table>
      <tr>
        <td>top:</td>
        <td>
          <CurrencySymbol amount={999} align="top" />
        </td>
      </tr>

      <tr>
        <td>center:</td>
        <td>
          <CurrencySymbol amount={999} align="center" />
        </td>
      </tr>

      <tr>
        <td>bottom:</td>
        <td>
          <CurrencySymbol amount={999} align="bottom" />
        </td>
      </tr>
    </table>
  );
};
