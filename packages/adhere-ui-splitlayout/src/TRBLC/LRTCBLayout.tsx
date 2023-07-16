import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LRTCBLayout
 * @constructor
 */
const LRTCBLayout: FC<TBLRCSplitLayoutProps> = ({
  bSplitProps,
  lSplitProps,
  tSplitProps,
  rSplitProps,
  ...props
}) => {
  return (
    <FlexLayout.TRBLC.LRTCBLayout
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default LRTCBLayout;
