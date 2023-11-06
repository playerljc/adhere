import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TLCLayout
 * @constructor
 */
const TLCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ tSplitProps, lSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.TLCLayout
          // @ts-ignore
          ref={ref}
          {...props}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default TLCLayout;
