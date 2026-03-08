import { useUpdateEffect } from 'ahooks';
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
  useUpdateEffect(() => {
    if (layout === 'vertical') {
      props?.onChange?.(Array.from({ length: props.columnCount }, () => 'auto'));
    } else if (layout === 'horizontal') {
      props?.onChange?.(
        // @ts-ignore
        Array.from({ length: props.columnCount }, () => [undefined, 'auto']).flat(),
      );
    }
  }, [layout, props.columnCount]);

  if (layout === 'horizontal') {
    return <Horizontal {...props} />;
  }

  return <Vertical {...props} />;
};

export default TableGridLayoutColgroupSetting;
