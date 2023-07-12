import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCRBLayout
 * @constructor
 */
const LCRBLayout: FC<TBLRCSplitLayoutProps> = ({
  bSplitProps,
  lSplitProps,
  rSplitProps,
  ...props
}) => {
  return (
    <FlexLayout.TRBLC.LCRBLayout
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default LCRBLayout;
