import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LTCBLayout
 * @constructor
 */
const LTCBLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { lSplitProps, tSplitProps, bSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.LTCBLayout
      ref={ref}
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(LTCBLayout));
