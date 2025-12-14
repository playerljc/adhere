import classNames from 'classnames';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';
import type { LabelProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { SELECT_PREFIX } from '../../constant';

const selectPrefix = `${SELECT_PREFIX}-grid-layout`;

export const SlotEndLabel = memo<PropsWithoutRef<LabelProps> & RefAttributes<HTMLDivElement>>(
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

export const SlotStartLabel = memo<PropsWithoutRef<LabelProps> & RefAttributes<HTMLDivElement>>(
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
