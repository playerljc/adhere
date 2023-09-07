import React, { forwardRef, memo } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CRLayout
 * @constructor
 */
const CRLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { bSplitProps, rSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.CRLayout
      // @ts-ignore
      ref={ref}
      {...props}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(CRLayout));
