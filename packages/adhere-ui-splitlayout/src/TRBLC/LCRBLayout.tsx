import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCRBLayout
 * @constructor
 */
const LCRBLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(
    ({ bSplitProps, lSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.LCRBLayout
          // @ts-ignore
          ref={ref}
          {...props}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
          bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default LCRBLayout;
