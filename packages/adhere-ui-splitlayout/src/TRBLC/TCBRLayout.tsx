import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCBRLayout
 * @constructor
 */
const TCBRLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(
    ({ tSplitProps, bSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.TCBRLayout
          // @ts-ignore
          ref={ref}
          {...props}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
          bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default TCBRLayout;
