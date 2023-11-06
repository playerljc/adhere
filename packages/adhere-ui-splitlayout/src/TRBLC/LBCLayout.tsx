import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LBCLayout
 * @constructor
 */
const LBCLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ bSplitProps, lSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.LBCLayout
        // @ts-ignore
        ref={ref}
        {...props}
        lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
        bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      />
    );
  }),
);

export default LBCLayout;
