import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LRTCBLayout
 * @constructor
 */
const LRTCBLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(
    ({ bSplitProps, lSplitProps, tSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.LRTCBLayout
          // @ts-ignore
          ref={ref}
          {...props}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
          bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default LRTCBLayout;
