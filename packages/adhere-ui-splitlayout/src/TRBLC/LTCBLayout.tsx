import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LTCBLayout
 * @constructor
 */
const LTCBLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(
    ({ lSplitProps, tSplitProps, bSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.LTCBLayout
          // @ts-ignore
          ref={ref}
          {...props}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
          bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default LTCBLayout;
