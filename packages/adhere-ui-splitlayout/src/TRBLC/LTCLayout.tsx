import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LTCLayout
 * @constructor
 */
const LTCLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { lSplitProps, tSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.LTCLayout
      // @ts-ignore
      ref={ref}
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(LTCLayout));
