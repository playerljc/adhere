import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCLayout
 * @constructor
 */
const LCLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ lSplitProps, ...props }, ref) => {
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
