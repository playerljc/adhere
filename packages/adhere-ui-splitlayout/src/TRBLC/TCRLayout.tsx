import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCRLayout
 * @constructor
 */
const TCRLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ tSplitProps, rSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.TCRLayout
        // @ts-ignore
        ref={ref}
        {...props}
        tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
        rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      />
    );
  }),
);

export default TCRLayout;
