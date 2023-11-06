import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CBRLayout
 * @constructor
 */
const CBRLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ bSplitProps, rSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.CBRLayout
        // @ts-ignore
        ref={ref}
        {...props}
        bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
        rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      />
    );
  }),
);

export default CBRLayout;
