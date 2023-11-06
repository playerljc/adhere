import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCLayout
 * @constructor
 */
const LCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(({ lSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.LCLayout
        // @ts-ignore
        ref={ref}
        {...props}
        lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      />
    );
  }),
);

export default LCLayout;
