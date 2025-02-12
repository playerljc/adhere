import React from 'react';

import { CurrencySymbol } from '@baifendian/adhere';

export default () => {
  return (
    <table>
      <tr>
        <td>small:</td>
        <td>
          <CurrencySymbol amount={999} symbolSize="small" />
        </td>
      </tr>

      <tr>
        <td>middle:</td>
        <td>
          <CurrencySymbol amount={999} symbolSize="middle" />
        </td>
      </tr>

      <tr>
        <td>large:</td>
        <td>
          <CurrencySymbol amount={999} symbolSize="large" />
        </td>
      </tr>
    </table>
  );
};
