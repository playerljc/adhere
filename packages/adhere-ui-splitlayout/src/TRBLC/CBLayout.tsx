import React, { ForwardRefRenderFunction, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CBLayout
 * @constructor
 */
const CBLayout: ForwardRefRenderFunction<any, TBLRCSplitLayoutProps> = (
  { bSplitProps, ...props },
  ref,
) => {
  return (
    <FlexLayout.TRBLC.CBLayout
      ref={ref}
      {...props}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default memo(forwardRef<any, TBLRCSplitLayoutProps>(CBLayout));
