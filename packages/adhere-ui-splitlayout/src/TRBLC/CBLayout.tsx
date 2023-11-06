import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CBLayout
 * @constructor
 */
const CBLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(({ bSplitProps, ...props }, ref) => {
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
