import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCLayout
 * @constructor
 */
const TCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(({ tSplitProps, ...props }, ref) => (
    <FlexLayout.TRBLC.TCLayout
      // @ts-ignore
      ref={ref}
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
    />
  )),
);

TCLayout.displayName = 'TCLayout';

export default TCLayout;
