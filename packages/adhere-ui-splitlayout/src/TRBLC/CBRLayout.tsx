import type { ForwardRefRenderFunction } from 'react';
import React, { forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CBRLayout
 * @constructor
 */
const CBRLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { bSplitProps, rSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.CBRLayout
      // @ts-ignore
      ref={ref}
      {...props}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(CBRLayout));
