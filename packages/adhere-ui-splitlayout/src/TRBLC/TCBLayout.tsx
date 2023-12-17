import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCBLayout
 * @constructor
 */
const TCBLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ tSplitProps, bSplitProps, ...props }, ref) => (
      <FlexLayout.TRBLC.TCBLayout
        // @ts-ignore
        ref={ref}
        {...props}
        tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
        bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      />
    ),
  ),
);

TCBLayout.displayName = 'TCBLayout';

export default TCBLayout;
