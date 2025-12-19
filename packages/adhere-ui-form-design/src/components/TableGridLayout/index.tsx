import React, { memo } from 'react';
import type { FC } from 'react';

import AdhereTableGridLayout from '@baifendian/adhere-ui-tablegridlayout';
import type { LabelProps, ValueProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { SELECT_PREFIX } from '../../constant';
import type { TableGridLayoutProps } from '../../types';

const selectPrefix = `${SELECT_PREFIX}-design-table-grid-layout`;

/**
 * TableGridLayout
 * @param props
 */
const TableGridLayout: FC<TableGridLayoutProps> = (props) => {
  return <AdhereTableGridLayout className={selectPrefix} {...props} />;
};

export const Label = memo<LabelProps>((props) => (
  <AdhereTableGridLayout.Label
    // @ts-ignore
    valign="middle"
    {...props}
  />
));
export const Value = memo<ValueProps>((props) => (
  <AdhereTableGridLayout.Value
    // @ts-ignore
    valign="middle"
    {...props}
  />
));
export const TopAlignValue = memo<ValueProps>((props) => (
  <AdhereTableGridLayout.Value
    // @ts-ignore
    valign="baseline"
    {...props}
  />
));

export default TableGridLayout;
