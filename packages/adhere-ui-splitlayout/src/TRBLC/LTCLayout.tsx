import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LTCLayout
 * @constructor
 */
const LTCLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ lSplitProps, tSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.LTCLayout
        // @ts-ignore
        ref={ref}
        {...props}
        lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
        tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      />
    );
  }),
);

export default LTCLayout;
