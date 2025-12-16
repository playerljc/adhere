import React, { memo } from 'react';
import type { FC } from 'react';

import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';
import type { LabelProps, ValueProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { SELECT_PREFIX } from '../../constant';
import type { PropertiesGridLayoutProps } from '../../types';

const selectPrefix = `${SELECT_PREFIX}-design-properties-grid-layout`;

/**
 * PropertiesGridLayout
 * @param props
 */
const PropertiesGridLayout: FC<PropertiesGridLayoutProps> = (props) => {
  return <TableGridLayout {...props} />;
};

export const Label = memo<LabelProps>((props) => (
  <TableGridLayout.Label
    // @ts-ignore
    valign="middle"
    {...props}
  />
));
export const Value = memo<ValueProps>((props) => (
  <TableGridLayout.Value
    // @ts-ignore
    valign="middle"
    {...props}
  />
));
export const TopAlignValue = memo<ValueProps>((props) => (
  <TableGridLayout.Value
    // @ts-ignore
    valign="baseline"
    {...props}
  />
));

export default PropertiesGridLayout;
