import React, { type FC } from 'react';

import type { TableGridLayoutColgroupSettingProps } from '../../types';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

/**
 * TableGridLayoutColgroupSetting
 * @param layout
 * @param props
 * @constructor
 */
const TableGridLayoutColgroupSetting: FC<TableGridLayoutColgroupSettingProps> = ({
  layout,
  ...props
}) => {
  if (layout === 'horizontal') {
    return <Horizontal {...props} />;
  }

  return <Vertical {...props} />;
};

export default TableGridLayoutColgroupSetting;
