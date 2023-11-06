import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CBLayout
 * @constructor
 */
const CBLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ bSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.CBLayout
        // @ts-ignore
        ref={ref}
        {...props}
        bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      />
    );
  }),
);

export default CBLayout;
