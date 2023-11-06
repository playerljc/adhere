import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CRBLayout
 * @constructor
 */
const CRBLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ bSplitProps, rSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.CRBLayout
        // @ts-ignore
        ref={ref}
        {...props}
        rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
        bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      />
    );
  }),
);

export default CRBLayout;
