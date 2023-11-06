import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCLayout
 * @constructor
 */
const TCLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = memo<TBLRCSplitLayoutProps>(
  forwardRef<any, TBLRCSplitLayoutProps>(({ tSplitProps, ...props }, ref) => (
    <FlexLayout.TRBLC.TCLayout
      // @ts-ignore
      ref={ref}
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
    />
  )),
);

export default TCLayout;
