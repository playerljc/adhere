import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LRTCBLayout
 * @constructor
 */
const LRTCBLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { bSplitProps, lSplitProps, tSplitProps, rSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.LRTCBLayout
      // @ts-ignore
      ref={ref}
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(LRTCBLayout));
