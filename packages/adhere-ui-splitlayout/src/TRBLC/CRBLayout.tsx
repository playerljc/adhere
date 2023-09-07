import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CRBLayout
 * @constructor
 */
const CRBLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { bSplitProps, rSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.CRBLayout
      // @ts-ignore
      ref={ref}
      {...props}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(CRBLayout));
