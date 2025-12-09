import classNames from 'classnames';
import React, { forwardRef, memo } from 'react';
import type { FC } from 'react';

import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';
import type { LabelProps, ValueProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { SELECT_PREFIX } from '../../../constant';
import type { PropertiesGridLayoutProps } from '../../../types';

const selectPrefix = `${SELECT_PREFIX}-design-properties-grid-layout`;

/**
 * PropertiesGridLayout
 * @param props
 */
const PropertiesGridLayout: FC<PropertiesGridLayoutProps> = (props) => {
  return <TableGridLayout {...props} />;
};

export const SlotStartLabel = memo<LabelProps>(
  forwardRef<HTMLDivElement, LabelProps>(({ children, ...props }, ref) => {
    return (
      <TableGridLayout.Label
        // @ts-ignore
        valign="middle"
        {...props}
      >
        <div className={classNames(`${selectPrefix}-sloat-label-wrapper`)}>
          <div className={classNames(`${selectPrefix}-sloat-label`)} ref={ref}></div>
          <div className={classNames(`${selectPrefix}-sloat-label`)}>{children}</div>
        </div>
      </TableGridLayout.Label>
    );
  }),
);
export const SlotEndLabel = memo<LabelProps>(
  forwardRef<HTMLDivElement, LabelProps>(({ children, ...props }, ref) => {
    return (
      <TableGridLayout.Label
        // @ts-ignore
        valign="middle"
        {...props}
      >
        <div className={classNames(`${selectPrefix}-sloat-label-wrapper`)}>
          <div className={classNames(`${selectPrefix}-sloat-label`)}>{children}</div>
          <div className={classNames(`${selectPrefix}-sloat-label`)} ref={ref}></div>
        </div>
      </TableGridLayout.Label>
    );
  }),
);
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
