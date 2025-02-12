import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCRLayout
 * @constructor
 */
const LCRLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ lSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.LCRLayout
          // @ts-ignore
          ref={ref}
          {...props}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
        />
      );
    },
  ),
);

LCRLayout.displayName = 'LCRLayout';

export default LCRLayout;
