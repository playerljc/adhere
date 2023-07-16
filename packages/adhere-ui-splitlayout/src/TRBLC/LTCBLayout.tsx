import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LTCBLayout
 * @constructor
 */
const LTCBLayout: FC<TBLRCSplitLayoutProps> = ({
  lSplitProps,
  tSplitProps,
  bSplitProps,
  ...props
}) => {
  return (
    <FlexLayout.TRBLC.LTCBLayout
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default LTCBLayout;
