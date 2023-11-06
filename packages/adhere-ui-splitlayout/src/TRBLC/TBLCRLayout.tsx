import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TBLCRLayout
 * @constructor
 */
const TBLCRLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(
    ({ tSplitProps, bSplitProps, lSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.TBLCRLayout
          // @ts-ignore
          ref={ref}
          {...props}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
          bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default TBLCRLayout;
