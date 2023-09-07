import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TLCLayout
 * @constructor
 */
const TLCLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { tSplitProps, lSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.TLCLayout
      // @ts-ignore
      ref={ref}
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(TLCLayout));
