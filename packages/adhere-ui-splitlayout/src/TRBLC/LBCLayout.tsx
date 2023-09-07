import type { ForwardRefRenderFunction } from 'react';
import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LBCLayout
 * @constructor
 */
const LBCLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { bSplitProps, lSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.LBCLayout
      // @ts-ignore
      ref={ref}
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(LBCLayout));
