import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TBLCRLayout
 * @constructor
 */
const TBLCRLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { tSplitProps, bSplitProps, lSplitProps, rSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.TBLCRLayout
      // @ts-ignore
      ref={ref}
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(TBLCRLayout));
