import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LTCLayout
 * @constructor
 */
const LTCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ lSplitProps, tSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.LTCLayout
          // @ts-ignore
          ref={ref}
          {...props}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
        />
      );
    },
  ),
);

export default LTCLayout;
