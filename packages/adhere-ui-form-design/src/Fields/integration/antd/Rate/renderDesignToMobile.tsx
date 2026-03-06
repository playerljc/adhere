import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { renderDesign } from './renderDesign';

export function renderDesignToMobile(params: {
  value: import('../../../../types').DesignValue;
}): DataItemRow {
  return renderDesign(params);
}
