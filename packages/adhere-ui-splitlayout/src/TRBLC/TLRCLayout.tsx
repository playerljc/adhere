import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TLRCLayout
 * @constructor
 */
const TLRCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ tSplitProps, lSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.TLRCLayout
          // @ts-ignore
          ref={ref}
          {...props}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
        />
      );
    },
  ),
);

TLRCLayout.displayName = 'TLRCLayout';

export default TLRCLayout;
