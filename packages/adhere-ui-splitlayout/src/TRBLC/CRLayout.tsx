import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CRLayout
 * @constructor
 */
const CRLayout = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ bSplitProps, rSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.CRLayout
        // @ts-ignore
        ref={ref}
        {...props}
        rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      />
    );
  }),
);

export default CRLayout;
