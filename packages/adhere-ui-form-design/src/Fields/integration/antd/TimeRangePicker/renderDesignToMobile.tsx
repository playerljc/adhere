import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignContextType, DesignValue } from '../../../../types';
import { renderDesign } from './renderDesign';

export function renderDesignToMobile(params: {
  parentId?: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow {
  return renderDesign(params);
}
