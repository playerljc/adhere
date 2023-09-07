import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCLayout
 * @constructor
 */
const LCLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { lSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.LCLayout
      // @ts-ignore
      ref={ref}
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(LCLayout));
