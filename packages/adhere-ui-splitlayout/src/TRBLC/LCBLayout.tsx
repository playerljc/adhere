import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCBLayout
 * @constructor
 */
const LCBLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ bSplitProps, lSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.LCBLayout
        // @ts-ignore
        ref={ref}
        {...props}
        lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
        bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      />
    );
  }),
);

export default LCBLayout;
