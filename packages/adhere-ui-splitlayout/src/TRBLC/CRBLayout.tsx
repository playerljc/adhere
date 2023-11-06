import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CRBLayout
 * @constructor
 */
const CRBLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ bSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.CRBLayout
          // @ts-ignore
          ref={ref}
          {...props}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
          bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default CRBLayout;
